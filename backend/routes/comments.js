const express = require("express");
const Comments = require("../models/commentsModel");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const Movies = require("../models/movieModel");
// get all comments

router.get("/", async (req, res) => {
  try {
    const comments = await Comments.find({});
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get one comment
router.get("/:id", async (req, res) => {
  try {
    const comment = await Comments.findOne(ObjectId(req.params.id));
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send(error);
  }
});

// router.get("/movie/:movie_id", async (req, res) => {
//   try {
//     const comments = await Comments.find({
//       movie_id: req.params.movie_id,
//     });
//     res.status(200).send(comments);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// router.post("/", async (req, res) => {
//   try {
//     const movie = await Movies.findOne({ _id: ObjectId(req.params.id) });
//     if (!movie) {
//       res.status(201).send("cannot find this movie!");
//     }
//     const commentData = {
//       //request body only needs name,email and text.
//       ...req.body,
//       _id: new mongoose.Types.ObjectId(),
//       date: Date.now(),
//       movie_id: req.params.id,
//     };
//     await Comments.create(commentData);
//     movie.
//     res.status(200).send(commentData);
//   } catch (error) {
//       res.status(500).send(error)
//   }
// });

module.exports = router;
