const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000;


//create node-js server

const app = express();

//start the server

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
})
