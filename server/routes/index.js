var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home'  
  });
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'  
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About Us'  
  });
});

/* GET products page. */
router.get('/products', function(req, res, next) {
  res.render('index', { 
    title: 'Products'  
  });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { 
    title: 'Services'  
  });
});

/* GET demos page. */
router.get('/demos', function(req, res, next) {
  res.render('index', { 
    title: 'Demo'  
  });
});

/* GET contacts page. */
router.get('/contact', function(req, res, next) {
  res.render('contacts', { 
    title: 'Contact Us'  
  });
});

module.exports = router;
