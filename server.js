const createError = require('http-errors');
const express = require('express');
const path  = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();

const apiRouter = require('./routes/api')

const User = require('./User');

const SECRET = {
  // eslint-disable-next-line no-undef
  MONGODB_USERNAME: process.env.S3_KEY,
  // eslint-disable-next-line no-undef
  MONGODB_PASS: process.env.S3_SECRET

};
console.log(
  // eslint-disable-next-line no-undef
  // process.env
)
// Set up mongoose
// console.log(SECRET.MONGODB_USERNAME, SECRET.MONGODB_PASS)
const mongodb = `mongodb+srv://${SECRET.MONGODB_USERNAME}:${SECRET.MONGODB_PASS}@cluster0.qyah1.mongodb.net/personalLibrary?retryWrites=true&w=majority`;
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
