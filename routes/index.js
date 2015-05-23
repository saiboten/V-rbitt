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

router.get('/discography', function(req, res, next) {
    res.render('discography', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Express' });
});

router.get('/stein', function(req, res, next) {
    res.render('stein', { title: 'Express' });
});

router.get('/eirik', function(req, res, next) {
    res.render('eirik', { title: 'Express' });
});

router.get('/matt', function(req, res, next) {
    res.render('matt', { title: 'Express' });
});

router.get('/tomas', function(req, res, next) {
    res.render('tomas', { title: 'Express' });
});

router.get('/tobias', function(req, res, next) {
    res.render('tobias', { title: 'Express' });
});

module.exports = router;
