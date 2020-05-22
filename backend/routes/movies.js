// import express from 'express';
// import Movies from '../models/productModel';
const express = require('express');
const Movies = require('../models/movieModel');
const router = express.Router();

//get all movies

router.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  //example: https://stackabuse.com/?page=2&limit=50
  //localhost:5000/api/movies/?page=10&limit=5

  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit)

  try {
    const movies = await Movies.find({}).limit(limit).skip((page-1) * limit);
    res.send(movies);
  } catch (e) {
    res.status(500).send();
  }
});

//get One movie with id

router.get('/:id', (req, res) => {
  Movies.findOne({ _id: req.params.id }, (err, movie) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).send(movie);
    }
  });
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
