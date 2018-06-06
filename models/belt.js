const mongoose = require('mongoose')
const beltSchema = require('../db/schemas/users')

const belt = mongoose.model('belt', beltSchema)

module.exports = belt