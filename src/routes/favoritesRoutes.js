const { Router } = require('express');
const Favorite = require('../models/Favorites');

module.exports = Router()
  .post('/', (req, res, next) => {
    Favorite
      .create(req.body)
      .then(favorite => res.send(favorite))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Favorite
      .find()
      .then(favorites => res.send(favorites))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Favorite
      .findById(req.params.id)
      .then(favorite => res.send(favorite))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Favorite
      .findByIdAndDelete(req.params.id)
      .then(favorite => res.send(favorite))
      .catch(next);
  });
