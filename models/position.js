const mongoose = require('mongoose')
const positionSchema = require('../db/schemas/positions')

const positions = mongoose.model('position', positionSchema)

module.exports = positions