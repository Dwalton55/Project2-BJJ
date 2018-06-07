//requirements: require mongoose
const Schema = require('mongoose').Schema



const userSchema = new Schema({
    name : String,
    school: String,
    coach: String,
    currentBelt: Object,
    targetBelt: Object,
    gamePlans: [],
    trainingplans:[],
    tournaments:[],
    pastbelts:[]
})

module.exports = userSchema