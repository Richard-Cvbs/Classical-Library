const createError = require('http-errors');
const express = require('express');
const path  = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const aws = require('aws-sdk');

const app = express();

const apiRouter = require('./routes/api')

const User = require('./User');

let s3 = new aws.S3({
  MONGODB_USERNAME: process.env.S3_KEY,
  MONGODB_PASS: process.env.S3_SECRET
});
// Set up mongoose
const mongodb = `mongodb+srv://${s3.MONGODB_USERNAME}:${s3.MONGODB_PASS}@cluster0.qyah1.mongodb.net/personalLibrary?retryWrites=true&w=majority`;
mongoose.connect(mongodb, () => {
  console.log('connected');
});



//view engine
app.set("view engine", "ejs");

// misc
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client', 'build')));

// routes
app.use('/api', apiRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT || 5000);

module.exports = app;
