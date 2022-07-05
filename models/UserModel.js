const mongoose = require("mongoose")
const Role = require('../models/RoleModel')
const User = new mongoose.Schema({
    name: String,
    surname: String,
    email:String,
    age: Number,
    username: String,
    password: String,
    verified: Boolean,
    roles: [
        {
          type: mongoose.Schema.ObjectId,
          ref: 'role',
        },
      ],
})
module.exports = mongoose.model('user', User)