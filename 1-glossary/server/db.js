require("dotenv").config();
const mongoose = require("mongoose");
const { Schema } = mongoose;

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect('mongodb://localhost/glossary')
// 2. Set up any schema and models needed by the app
const termSchema = new Schema({
  word: String,
  definition: String
})

const Term = mongoose.model('Term', termSchema);
// 3. Export the models
// 4. Import the models into any modules that need them
