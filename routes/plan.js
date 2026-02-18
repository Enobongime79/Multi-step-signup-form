var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (!req.session.signup){
    return res.redirect('/')
  }
  res.render("plan", { title: "Select your plan"})
});

router.post("/", (req, res) => {

})

module.exports = router;
