require("dotenv").config();
// we import our express dependency here and use portion of it
const express = require('express');
const app = express();
const port = 3000;
// extra dependencies

// set up static file usage for app home page
app.use(express.static('./client/dist'));

// basic get request works on our homepage!
app.get('/', (req, res) => {
  res.send('hi');
})











// listening on port
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
});



// routing methods can go here