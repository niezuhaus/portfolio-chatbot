var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'welcome' });
});

router.get('/drawings', function(req, res) {
  res.render('drawings', { title: 'drawings' });
});

module.exports = router; 
