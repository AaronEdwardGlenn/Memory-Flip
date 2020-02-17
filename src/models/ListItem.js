const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  imageName: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model('ListItem', schema);
