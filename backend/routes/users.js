const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

/* GET users listing. */

//get All user

router.get("/", async function (req, res) {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

//get(find) one user

router.get("/findOneUser", function (req, res) {});

// post one user(signup)

router.post("/signup", async (req, res) => {
  try {
    const { email, name, password } = req.body;
    const user = await User.create({
      name,
      email,
      password,
    });
    const token = await user.generateAuthToken();

    res.status(200).send({ user, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// signin one user

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(500).send(error.message);
  }
});



router.post("/signout", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    await user.logOut();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
