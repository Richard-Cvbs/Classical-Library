const express = require('express');

const router = express.Router();

router.post('/newEntry', (req, res, next) => {
  res.redirect('/');
});

router.get('/newEntry', (req, res, next) => {
  res.render('newEntry', { title: 'Mini Messageboard' });
});

module.exports = router;
