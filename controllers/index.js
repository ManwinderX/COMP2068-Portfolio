var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Manwinder Singh' 
  });
});

router.get('/about', (req, res) => {
  res.render('about',{
    title: 'About'
  })
})

router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact'
  })
})

router.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'Projects'
  })
})

module.exports = router;
