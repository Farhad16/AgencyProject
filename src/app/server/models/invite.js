const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inviteSchema = new Schema({
  senderEmail: {
    type: String,
    required: true,
  },
  getEmail: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('invite', inviteSchema, 'invites');
