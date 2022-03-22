const express = require('express');

const router = express.Router();

const api_controller = require('../controllers/api_controller');

// GET api call.
router.get('/', api_controller.index);
// GET api call.
router.get('/books/', api_controller.get_all_books);

router.post('/addbook/', api_controller.post_new_book);

router.get('/bookinstances/', api_controller.get_book_instances);

router.get('/nonavailbookinstances/', api_controller.get_nonavail_instances);


module.exports = router;
