var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'spk-www',
	user: 'gawlikow_1135277',
	password: '70572689xX#',
	database: 'GAWLIKOWSKA'
});

connection.connect(
      // if (err) throw err;
    // console.log("Connected!");
    // var sql = "SELECT * FROM `kot`";
    // connection.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log(result);
    // });
  );

router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
    //if (err) throw err;    
    var sql = 'SELECT * FROM kot';
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result);
      res.render('spis', { title:'spis', dane: result});
    });
});

module.exports = router;
