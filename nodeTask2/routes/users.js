var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.status(200).json({ username:"pratik", age: 21, email:"pratik@gmail.com", name:"Pratik Saha" });
});

module.exports = router;