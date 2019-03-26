var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'spk-www',
	user: 'gawlikow_1135277',
	password: '70572689xX#',
	database: 'GAWLIKOWSKA'
});
connection.connect();

router.get('/',  function(req, res, next) {
    res.render('formularz', { title:'formularz'});
});

router.post('/', function(req, res, next) {
    var rasa = req.body.rasa;
    var poch = req.body.pochodzenie;
    var waga = req.body.waga;
    var kolor = req.body.kolor;
    var opis = req.body.opis;
    
    console.log(req.body);


    var sql = 'INSERT INTO `kot` (rasa, pochodzenie, waga, kolor, opis)\
    VALUES("'+rasa+'","'+poch+'", "'+waga+'", "'+kolor+'", "'+opis+'")';
    connection.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    });
    res.render('index', { title:'index'});
  });
  
  module.exports = router;