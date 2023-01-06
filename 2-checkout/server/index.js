require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
const bodyParser = require('body-parser');

// Establishes connection to the database on server start
const db = require("./db");

const app = express();
// body parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

/****
 *
 *
 * Other routes here....
 *
 *
 */
app.post('/confirmation', (req, res) => {
  // req.body.form1/2/3 all hold arrays
  // {
  //   form1: [ 'tiger hong', 'tigerhong186@gmail.com', 'tigerhong123' ],
  //   form2: [ '4140 Elizabeth Court', 'Cypress', 'CA', '90630', '714-614-3715' ],
  //   form3: [ '0000 0000 0000 0000', '01/23', '000', '90630' ]
  // }
  //cookie VARCHAR(50), name VARCHAR(20), email VARCHAR(20), password VARCHAR(20)
  // address VARCHAR(100), card INT, expiration INT, CCV INT, zipcode INT
  var info = req.body
  var address = info.form2[0] + ', ' + info.form2[1] + ', ' + info.form2[2] + ' ' + info.form2[3]
  // we can probably store our data here
  // database request here to input all the information into the database
  db.queryAsync(`INSERT INTO responses (cookie, name, email, password, address, phone, card, expiration, CCV, zipcode) VALUES ('${info.cookie}', '${info.form1[0]}', '${info.form1[1]}', '${info.form1[2]}', '${address}', '${info.form2[4]}', '${info.form3[0]}', '${info.form3[1]}', '${info.form3[2]}', '${info.form3[3]}')`)
    .then ( () => {
      db.queryAsync(`SELECT * from responses having cookie = '${info.cookie}'`)
        .then ( (result) => {
          // result [0] is an array holding our object that has all our information
          var data = [];
          // since its an object we can manipulate the data first from an object into an array
          for (var key in result[0][0]) {
            if (key !== 'id' && key !== 'cookie') {
              data.push(key + ': ' + result[0][0][key])
            }
          }
          res.send(JSON.stringify(data));
        })
    })
})

app.post('/checkUser', (req, res) => {

  // req.body.cookie is our cookie
  // make db query to select from responses with cookie and document.cookie
  db.queryAsync(`SELECT cookie FROM responses group by cookie having cookie = '${req.body.cookie}'`)
    .then ( (result) => {
      // result[0] gives us an array of the searched results
      if (result[0].length) {
        res.send(JSON.stringify(true))
      } else {
        res.send(JSON.stringify(false))
      }
    })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
