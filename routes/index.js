const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Build-A-Board' });
});

router.get('/decks/index.hbs', function(req, res, next) {
  res.render('/decks/index.hbs')
})

module.exports = router;
