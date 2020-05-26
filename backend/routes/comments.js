// const express = require('express');
// const Movies = require('../models/movieModel');
// const router = express.Router();
//
// // get one movie's all user comments.
//
// router.get('/:id', async (req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     //example: https://stackabuse.com/?page=2&limit=50
//     //localhost:5000/api/movies/?page=10&limit=5
//
//     const page = parseInt(req.query.page);
//     const limit = parseInt(req.query.limit)
//
//     try {
//       const movies = await Movies.find({}).limit(limit).skip((page-1) * limit);
//       res.send(movies);
//     } catch (e) {
//       res.status(500).send();
//     }
//   });
