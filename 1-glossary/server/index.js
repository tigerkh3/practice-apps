require("dotenv").config();
// we import our express dependency here and use portion of it
const express = require('express');
const app = express();
const port = 3000;
// extra dependencies
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

// models
const model = require('./db')
// set up static file usage for app home page
app.use(express.static('./client/dist'));

// basic get request works on our homepage!
app.get('/', (req, res) => {
  res.send('hi');
})


// here we have middleware functions to help with post request

app.post('/', (req, res) => {
  // our req.body gives us our data object
  // req.body.term is our term
  var keyTerm = req.body.term;
  // req.body.def is our definition
  var def = req.body.def;

  // now we can make our database call and add to it
  // database call goes here

  var test = new model({
    term: keyTerm,
    definition: def
  });
  // save our new term/definition to our database!
  test.save()
    .then( () => {
      // after we save it we should send the total glossary back

      // mongoose db.terms.find()
      model.find()
      .then ((result) => {
        res.send(result);
      })
    })
})








// listening on port
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});



// routing methods can go here