var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('info', { title: 'Multi-Step Sign Up Form' });
});

router.post("/", (req, res) => {
  const { name, email, number } = req.body;

  let errors = {}; 

  if (!name){ errors.nameErr = "This field is required!" }
  if (!email){ errors.emailErr = "This field is required!"}
  if (!number){ errors.numberErr = "This field is required!" }


  if (Object.keys(errors).length > 0){
    return res.render("info", {
      title: "Multi-Step Sign Up Form",
      ...errors,
      name,
      email,
      number
    });
  }

  req.session.signup = {
    ...req.session.signup,
    name,
    email,
    number
  };

  
  res.redirect("/plans")
})

module.exports = router;
