const express = require('express');

const router = express.Router();

const api_controller = require('../controllers/api_controller');

// GET api call.
router.get('/', api_controller.index);

module.exports = router;
