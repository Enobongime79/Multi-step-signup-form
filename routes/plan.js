var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('plan', { title: 'Plans' });
});

router.post("/", (req, res) => {

})

module.exports = router;
