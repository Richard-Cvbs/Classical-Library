const createError = require('http-errors');
const express = require('express');
const path  = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routes/api')

const User = require('./User');

const app = express();

// Set up mongoose
const mongodb = 'mongodb+srv://m001-student:m001-mongodb-basics@cluster0.qyah1.mongodb.net/personalLibrary?retryWrites=true&w=majority';
mongoose.connect(mongodb, () => {
  console.log('connected');
});

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
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);

module.exports = app;