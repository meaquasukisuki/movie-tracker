const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    type: String,
    plot: {
      type: String,
      required: true,
    },
    genres: {
      type: [String],
      required: true,
    },
    cast: {
      type: [String],
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    languages: {
      type: [String],
      required: true,
    },
    imdb: Object,
    countries: {
      type: [String],
      required: true,
    },
    directors: {
      type: [String],
      required: true,
    },
  },
  {
    document: "movies",
  }
);

const movieModel = mongoose.model("Movie", movieSchema);

module.exports = movieModel;
