const express = require('express');
require('dotenv').config();
const colors = require('colors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const PORT = process.env.PORT || 5000;
const connectDB = require('./config/db');
const cors = require('cors');


//create node-js server

const app = express();

//connect into database

connectDB();

//allow client to use consume back-end
app.use(cors);

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql : process.env.NODE_ENV === 'development'
}))

//start the server

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
})
