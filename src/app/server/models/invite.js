const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inviteSchema = new Schema({
  senderEmail: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  getEmail: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  senderType: {
    type: String,
    required: true
  },
  senderName: {
    type: String,
    required: false
  },
  senderPhone: {
    type: String,
    required: false
  },
  senderTelephone: {
    type: String,
    required: false
  },
  senderCity: {
    type: String,
    required: false
  },
  senderDescription: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('invite', inviteSchema, 'invites');
