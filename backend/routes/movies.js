// import express from 'express';
// import Movies from '../models/productModel';
const { db } = require("../app");

const express = require("express");
const Movies = require("../models/movieModel");
const Comments = require("../models/commentsModel");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;

//get all movies

router.get("/", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  //example: https://stackabuse.com/?page=2&limit=50
  //localhost:5000/api/movies/?page=10&limit=5

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  try {
    const movies = await Movies.find({})
      .limit(limit)
      .skip((page - 1) * limit);
    res.send(movies);
  } catch (e) {
    res.status(500).send();
  }
});

//get One movie with id

router.get("/:id", async (req, res) => {
  try {
    const movie = await Movies.findOne({ _id: ObjectId(req.params.id) });
    const comments = await Comments.find({
      movie_id: ObjectId(req.params.id),
    });

    res.status(200).send({
      movie,
      comments,
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post("/:id", async (req, res) => {
  try {
    const movie = await Movies.findOne({ _id: ObjectId(req.params.id) });
    if (!movie) {
      throw new Error("cannot find movie!");
    }
    const commentData = {
      //request body only needs name,email and text.
      ...req.body,
      _id: new mongoose.Types.ObjectId(),
      date: Date.now(),
      movie_id: req.params.id,
    };
    new Comments.save(commentData);
    if (!movie.num_mflix_comments) {
      db.collection.update(
        { _id: ObjectId(req.params.id) },
        {
          $set: {
            num_mflix_comments: 0,
          },
        }
      );
    } else {
      db.collection.update(
        { _id: ObjectId(req.params.id) },
        {
          $set: {
            num_mflix_comments: movie.num_mflix_comments++,
          },
        }
      );
    }
  } catch (e) {
    res.send(e.message);
  }
});

// router.put("/:id", isAuth, isAdmin, async (req, res) => {
//   const productId = req.params.id;
//   const product = await Movies.findById(productId);
//   if (product) {
//     product.name = req.body.name;
//     product.price = req.body.price;
//     product.image = req.body.image;
//     product.brand = req.body.brand;
//     product.category = req.body.category;
//     product.countInStock = req.body.countInStock;
//     product.description = req.body.description;
//     const updatedProduct = await product.save();
//     if (updatedProduct) {
//       return res.status(200).send({ message: 'Movies Updated', data: updatedProduct });
//     }
//   }
//   return res.status(500).send({ message: ' Error in Updating Movies.' });
//
// });

// router.delete("/:id", isAuth, isAdmin, async (req, res) => {
//   const deletedProduct = await Movies.findById(req.params.id);
//   if (deletedProduct) {
//     await deletedProduct.remove();
//     res.send({ message: "Movies Deleted" });
//   } else {
//     res.send("Error in Deletion.");
//   }
// });

// router.post('/', async (req, res) => {
//   const product = new Movies({
//     name: req.body.name,
//     price: req.body.price,
//     image: req.body.image,
//     brand: req.body.brand,
//     category: req.body.category,
//     countInStock: req.body.countInStock,
//     description: req.body.description,
//     rating: req.body.rating,
//     numReviews: req.body.numReviews,
//   });
//   const newProduct = await product.save();
//   if (newProduct) {
//     return res
//       .status(201)
//       .send({ message: 'New Movies Created', data: newProduct });
//   }
//   return res.status(500).send({ message: ' Error in Creating Movies.' });
// });

// const newProduct = await product.save();
// if (newProduct) {
//   return res.status(201).send({ message: 'New Movies Created', data: newProduct });
// }
// return res.status(500).send({ message: ' Error in Creating Movies.' });

module.exports = router;
