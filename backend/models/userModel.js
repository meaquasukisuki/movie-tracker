// @ts-ignore
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      dropDups: true,
      trim: true,
      lowercase: true,
    },
    password: { type: String, required: true },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },

  {
    collection: "users",
  }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

// Schema.methods is your own method on instance

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, user.email, {
    expiresIn: "5 days",
  });
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

userSchema.methods.logOut = async function () {
  // this is the caller(user)
  this.tokens = [];
  return await this.save();
};

// Schema.statics is your own method on Models
// example:User.findByCredentials
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await userModel.findOne({
    email,
  });

  if (!user) {
    throw new Error("Cannot find that user! Unable to login!");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("password wrong!");
  }
  return user;
};

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
