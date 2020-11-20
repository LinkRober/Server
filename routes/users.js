var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var trump = {name:'Trump',age:'66'};
  res.header('content-type','application/json;charset=utf-8');
  //Access-Control-Allow-Origin
  res.header('Access-Control-Allow-Origin','*');
  res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
  res.send(trump);
});

module.exports = router;
