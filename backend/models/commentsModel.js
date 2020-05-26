// const mongoose = require("mongoose");

// const commentsSchema = new mongoose.Schema(
//   {
//     _id: {
//       type: String,
//       required: true,
//     },
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     movie_id: {
//       type: String,
//       required: true,
//     },
//     text: {
//       type: String,
//       required: true,
//     },
//     date: {
//       type: Date,
//       required: true,
//     },
//   },
//   {
//     collection: 'comments',
//   }
// );

// const commentsModel = mongoose.Model("Comments", commentsSchema);

// module.exports = commentsModel;

const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    movie_id: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    collection: "movies",
  }
);

const commentsModel = mongoose.model("Comments", commentsSchema);

module.exports = commentsModel;
