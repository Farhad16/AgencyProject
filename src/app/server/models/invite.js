const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inviteSchema = new Schema({
  senderEmail: {
    type: String,
    required: true,
  },
  guideEmail: {
    type: String,
    required: true,
  },
  startingDate: {
    type: String,
    required: true,
  },
  endingDate: {
    type: String,
    required: true,
  },
  places: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('invite', inviteSchema, 'invites');
