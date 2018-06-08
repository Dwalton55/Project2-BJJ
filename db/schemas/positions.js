//requirements: require mongoose
const Schema = require('mongoose').Schema
const techniqueSchema = require('./technique')



const positionSchema = new Schema({
        position:String,
        techniques:[techniqueSchema]
    })

    module.exports = positionSchema