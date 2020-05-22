const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel')
/* GET users listing. */

//get All user

router.get('/', function(req, res) {
  userModel.find({},function(err,users) {
    if (err) {
      res.status(500).send(err.message);
    }
    else {
      res.status(200).send(users)
    }
  })
});

//get one user

router.get('/:id',function(req,res) {
  userModel.findOne({},function(err,user) {

  })
})

module.exports = router;
