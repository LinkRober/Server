var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var trump = {name:'Trump',age:'66'};
  res.header('content-type','application/json;charset=utf-8');
  //Access-Control-Allow-Origin
  res.header('Access-Control-Allow-Origin','*');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
  res.send(trump);
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  var trump = {name:'Trump',age:'66'};
  res.header('content-type','application/json;charset=utf-8');
  //Access-Control-Allow-Origin
  res.header('Access-Control-Allow-Origin','*');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
  res.send(trump);
});

module.exports = router;
