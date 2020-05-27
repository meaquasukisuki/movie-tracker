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
const ObjectId = require("mongodb").ObjectID;

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
      type: ObjectId,
    },
    text: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    document: "comments",
  }
);

const commentsModel = mongoose.model("Comments", commentsSchema);

module.exports = commentsModel;
