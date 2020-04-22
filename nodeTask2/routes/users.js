var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.status(200).json({ username:"pratik", age: 21, emailId:"pratik@gmail.com", fullname:"Pratik Saha" });
});

module.exports = router;