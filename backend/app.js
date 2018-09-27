const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoutes = require('./routes/user');



const app = express();

mongoose.connect(`mongodb+srv://wntitus:${process.env.DB_PW}@cluster0-liwcc.mongodb.net/studyhive?retryWrites=true`, { useNewUrlParser: true})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(() => {
    console.log('Connection to database failed');
  })



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.use('/api/user', userRoutes);

module.exports = app;
