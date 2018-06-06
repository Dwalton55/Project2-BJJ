//requirements: require mongoose
const Schema = require('mongoose').Schema



const tecniqueSchema = new Schema({
    Name : String,
    Description: String,
})

module.exports = tecniqueSchema