const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  filename: String,
  originalname: String,
  mimetype: String,
  size: Number,
  path: String,
  uploadDate: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model("File", fileSchema);
