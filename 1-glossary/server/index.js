require("dotenv").config();
// we import our express dependency here and use portion of it
const express = require('express');
const app = express();
const port = 3000;
// extra dependencies
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
const mongoose = require('mongoose');
// models
const model = require('./db')
// set up static file usage for app home page
app.use(express.static('./client/dist'));

// basic get request works on our homepage!
app.get('/', (req, res) => {
  res.send('hi');
})


// here we have middleware functions to help with post request

app.post('/search', (req, res) => {
  var searchTerm = req.body.term

  // search our databse for the term
  model.find({term: searchTerm})
    .then ( (result) => {
      res.send(result);
    })
})

app.post('/delete', (req, res) => {
  var id = req.body.id;
  id = mongoose.Types.ObjectId(id)

  // database call to delete the record
  model.deleteOne({_id: id})
    .then ( () => {
      model.find()
        .then ( (result) => {
          res.send(result);
        })
    } )
})

//post request to change the term/definition
app.post('/change', (req, res) => {

  var filter = {_id: req.body.id };
  var newTerm = req.body.newTerm;
  var newDef = req.body.newDef;

  if (newTerm && newDef) {
    var update = {
      term: newTerm,
      definition: newDef
    }
  } else if (!newTerm) {
    var update = {
      definition: newDef
    }
  } else if (!newDef) {
    var update = {
      term: newTerm
    }
  }

  // make our database call here
  if (!update.term && !update.definition) {
    res.status(404)
  } else {
  model.findByIdAndUpdate(filter, update)
    .then( () => {
      model.find()
        .then( (result) => {
          res.send(result);
        })
    })
  }
})

// post request to add a new word to the database
app.post('/', (req, res) => {
  // our req.body gives us our data object
  // req.body.term is our term
  var keyTerm = req.body.term;
  // req.body.def is our definition
  var def = req.body.def;

  // now we can make our database call and add to it
  // database call goes here
  // we should probably check to see if it already exists or not

  // initial render
  if (!req.body.term) {
    model.find()
      .then ( (result) => {
        res.send(result);
      })
  } else {
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
    }
})


// listening on port
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});
