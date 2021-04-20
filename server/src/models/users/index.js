const mongoose = require('mongoose');
const { Schema } = mongoose;

const userModel = mongoose.model('User', new Schema({
    name: String,
    email: String,
    password: String,
}))