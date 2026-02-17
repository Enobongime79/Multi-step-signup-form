var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  return res.redirect('/')
});

router.post("/", (req, res) => {

})

module.exports = router;
