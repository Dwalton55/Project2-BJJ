//requirements: require mongoose
const Schema = require('mongoose').Schema
const gameplanSchema = require('./gameplan')
const beltSchema = require('./belt')


const userSchema = new Schema({
    name : String,
    school: String,
    coach: String,
    currentBelt: beltSchema,
    targetBelt: beltSchema,
    gamePlans: [gameplanSchema],
    trainingplans:[],
    tournaments:[],
    pastbelts:[beltSchema]
})

module.exports = userSchema