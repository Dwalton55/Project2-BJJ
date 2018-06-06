const mongoose = require('mongoose')
const userSchema = require('../db/schemas/users')

const user = mongoose.model('user', userSchema)

module.exports = user