var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { title: 'Express' });
});

router.get('/concerts', function(req, res, next) {
    res.render('concerts', { title: 'Express' });
});

router.get('/media', function(req, res, next) {
    res.render('media', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});

router.get('/news1', function(req, res, next) {
    res.render('news1', { title: 'Express' });
});

router.get('/discography', function(req, res, next) {
    res.render('discography', { title: 'Express' });
});

module.exports = router;
