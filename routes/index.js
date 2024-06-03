var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {msg: 'start' });
});

router.get('/algorithmic_drawing/bezierforms', function(req, res) {
  res.render('bezierforms');
});

router.get('/algorithmic_drawing/georg_nees', function(req, res) {
  res.render('georg_nees');
});

router.get('/algorithmic_drawing/manfred_mohr', function(req, res) {
  res.render('manfred_mohr');
});

router.get('/algorithmic_drawing/circle_2', function(req, res) {
  res.render('circle_2');
});

router.get('/videos/timelapse', function(req, res) {
  res.render('timelapse');
});

router.get('/videos/der_vegetarist', function(req, res) {
  res.render('der_vegetarist');
});

router.get('/videos/los_tambores_de_nuble', function(req, res) {
  res.render('los_tambores_de_nuble');
});

router.get('/music_and_sound/midi-drums', function(req, res) {
  res.render('midi-drums');
});

router.get('/music_and_sound/metal_data_sounds', function(req, res) {
  res.render('metal_data_sounds');
});

router.get('/music_and_sound/lilian_ate_a_stone', function(req, res) {
  res.render('lilian_ate_a_stone');
});

router.get('/music_and_sound/variete', function(req, res) {
  res.render('variete');
});

router.get('/science_poster_free_software', function(req, res) {
  res.render('science_poster_free_software');
});

router.get('/p/:msg', function(req, res) {
  res.render('index', { title: req.params.msg + ' - niezuhaus', msg: req.params.msg });
});

router.get('/p/:folder/:msg', function(req, res) {
  res.render('index', { title: req.params.msg + ' - niezuhaus', msg: req.params.folder + '/' + req.params.msg });
});

module.exports = router; 
