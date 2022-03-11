const express = require('express');

const router = express.Router();

// messages

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/index', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.post('/newEntry', (req, res, next) => {
  const obj = {
    text: req.body.author,
    user: req.body.message,
    added: new Date(),
  };
  messages.push(obj);
  res.redirect('/index');
});

router.get('/newEntry', (req, res, next) => {
  res.render('newEntry', { title: 'Mini Messageboard' });
});

module.exports = router;
