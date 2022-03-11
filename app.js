const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const aboutRouter = require('./routes/about');
const newEntryRouter = require('./routes/newEntry');
const wiki = require('./routes/wiki');
const catalog = require('./routes/catalog');

const User = require('./User');

const app = express();

// Set up mongoose
mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@cluster0.qyah1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', () => {
  console.log('connected');
});

async function run() {
  const user = new User({ name: 'Richard', age: 25 });
  await user.save();
  console.log(user);
}
// run();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// misc
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', indexRouter);
app.use('/newEntry', indexRouter);
app.use('/users', usersRouter);
app.use('/about', newEntryRouter);
app.use('/wiki', wiki);
app.use('/catalog', catalog);

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
