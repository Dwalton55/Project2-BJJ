const mongoose = require('mongoose')
const beltSchema = require('../db/schemas/belt')

const belt = mongoose.model('belt', beltSchema)

module.exports = belt