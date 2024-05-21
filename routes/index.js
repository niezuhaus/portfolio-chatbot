var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'welcome' });
});

router.get('/bezierforms', function(req, res) {
  res.render('bezierforms', { title: 'drawings' });
});

router.get('/georg_nees', function(req, res) {
  res.render('georg_nees', { title: 'georg nees' });
});

router.get('/music', function(req, res) {
  res.render('music', { title: 'music' });
});

module.exports = router; 
