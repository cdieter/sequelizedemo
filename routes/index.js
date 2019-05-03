var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/database/:dbid', (req, res, next) =>{
  return res.send(`Recieved Get for database ${req.params.dbid}`);
});

module.exports = router;
