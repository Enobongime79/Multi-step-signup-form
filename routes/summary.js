var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('info', { title: 'Multi-Step Sign Up Form' });
});

module.exports = router;
