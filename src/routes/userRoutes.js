const { Router } = require('express');
const User = require('../models/User');

module.exports = Router()
  .get('/', (req, res, next) => {
    User
      .find()
      .then(users => res.send(users))
      .catch(next);
  })
  .get('./:id', (req, res, next) => {
    User
      .findById(req.params.id)
      .then(actor => res.send(actor))
      .catch(next);
  })
  .post('/', (req, res, next) => {
    User
      .create(req.body)
      .then(user => res.send(user))
      .catch(next);
  })
  .delete('./:id', (req, res, next) => {
    User
      .findByIdAndDelete(req.params.id)
      .then(user => req.send(user))
      .catch(next);
  })
;
