const mongoose = require('mongoose')
const techniqueSchema = require('../db/schemas/technique')

const technique = mongoose.model('technique', techniqueSchema)

module.exports = technique