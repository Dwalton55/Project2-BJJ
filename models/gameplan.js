const mongoose = require('mongoose')
const gameplanSchema = require('../db/schemas/gameplan')

const gameplan = mongoose.model('gameplan', gameplanSchema)

module.exports = gameplan