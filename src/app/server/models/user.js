const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        required: true}, 
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
    telephone:{
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('user', userSchema,'users');