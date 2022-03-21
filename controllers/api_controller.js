const async = require('async');
const path  = require('path');

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
      Book.find({}, callback)
      .populate('author')
      .populate('genre')
    }
  }, (err, results) => {
    if (err) console.log(err);
    res.json(results);
  });
};

exports.post_new_book = function (req, res){
  async.waterfall([
    function add_author(callback) {
      const newAuthor = new Author(
        {first_name: req.body.author})
        newAuthor.save(callback)
    },
    function add_new_book(res2, callback) {
      const bookToAdd = new Book(
        { title: req.body.title,
          author: res2._id,
          summary: req.body.summary,
          isbn: '9781473211896',
          genre: [req.body.genre]
         })
      bookToAdd.save(callback)
    }
  ], (err, results) => {
    if (err) console.log(err);
    console.log(results)
  });
  res.end()
}

exports.get_new_book = function (req, res){
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
}