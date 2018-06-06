//requirements: require mongoose
const Schema = require('mongoose').Schema



const beltSchema = new Schema({
    color : String,
    requirements: {}
})

module.exports = beltSchema