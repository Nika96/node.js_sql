var express = require('express');
var router = express.Router();


/* GET Strona Glowna */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Strona główna' });
  });
  
  /* GET spis ras */ 
  // router.get('/spis', function(req, res, next) {
	// res.render('spis', { title: 'Spis ras' });
  // });
  
  /* GET formularz */ 
  // router.get('/formularz', function(req, res, next) {
	// res.render('formularz', { title: 'Formularz' });
  // });
  
module.exports = router;

