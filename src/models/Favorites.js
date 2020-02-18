const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  favoriteUrl: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Favorites', schema);
