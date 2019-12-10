const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tavellerSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  telephone: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false
  },
  places: {
    type: String,
    required: false
  },
  about: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('userTraveller', tavellerSchema, 'users');
