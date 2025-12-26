const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
  },
  publicationYear: {
    type: Number,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  available: {
    type: Number,
    required: true,
    default: 1,
  },
});

module.exports = mongoose.model('Book', BookSchema);
