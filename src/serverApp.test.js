require('dotenv').config();

const request = require('supertest');
const app = require('./serverApp');

const User = require('./models/User');
const connect = require('./utils/connect');
const mongoose = require('mongoose');

describe('app routes', () => {
  beforeAll(() => {
    connect();
  });

  afterAll(() => {
    return mongoose.connection.close();
  });
});
