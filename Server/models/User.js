const mongoose = require('mongoose')

const { Schema } = mongoose
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = User
