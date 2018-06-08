//requirements: require mongoose
const Schema = require('mongoose').Schema
const gameplanSchema = require('./gameplan')



const beltSchema = new Schema({
    color : String,
    requirements: {gameplanSchema}
})

module.exports = beltSchema