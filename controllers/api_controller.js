const async = require('async');

const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/bookinstance');

exports.index = function (req, res) {
    async.parallel({
      book_count(callback) {
        Book.countDocuments({}, callback);
      },
      book_instance_count(callback) {
        BookInstance.countDocuments({}, callback);
      },
      book_instance_available_count(callback) {
        BookInstance.countDocuments({ status: 'Available' }, callback);
      },
      author_count(callback) {
        Author.countDocuments({}, callback);
      },
      genre_count(callback) {
        Genre.countDocuments({}, callback);
      },
    }, (err, results) => {
      if (err) console.log(err);
      console.log(results)
      res.json(results);
    });
  };

exports.get_all_books = function (req, res) {
  async.parallel({
    book_count(callback) {
      Book.countDocuments({}, callback);
    },
    all_book_details(callback) {
      Book.countDocuments({}, callback);
    }
  }, (err, results) => {
    if (err) console.log(err);
    res.json(results);
  });
};