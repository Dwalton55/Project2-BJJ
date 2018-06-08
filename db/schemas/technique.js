//requirements: require mongoose
const Schema = require('mongoose').Schema



const techniqueSchema = new Schema({
    Name : String,
    Description: String,
})

module.exports = techniqueSchema