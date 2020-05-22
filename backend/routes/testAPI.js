const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({
    express:'Hello'
  });
  next()
});

module.exports = router;
