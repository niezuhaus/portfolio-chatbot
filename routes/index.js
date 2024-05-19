var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'welcome' });
});

router.use('/drawings', express.static(path.join(__dirname, 'public', 'drawings')));

module.exports = router; 
