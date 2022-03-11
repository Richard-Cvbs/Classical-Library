const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/objects', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard' });
});

router.get('/objects/id', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard' });
});

router.get('/objects/id', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard' });
});

router.get('/objects/id', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard' });
});

router.get('/objects/id', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard' });
});
module.exports = router;
