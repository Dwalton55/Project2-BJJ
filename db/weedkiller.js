//require('dotenv').config();
const mongoose = require('mongoose')
const user = require('../models/users')
const gameplan = require('../models/gameplan')
const belt = require('../models/belt')
const technique = require('../models/technique')

// Connect to Database
//mongoose.connect(process.env.MONGODB_URI)
mongoose.connect('mongodb://localhost/bjjtrainer')
    .then(() => {
        console.log("====================")
        console.log('connected to mongoDB')
        console.log("====================")

    })

// Remove old Data
console.log('test')
user.remove()
    .then(() => {
        console.log(" removed user data")
    })
    .then(() => {
        belt.remove()
    })
    .then(() => {
        console.log(" removed belt data")
    })
    .then(() => {
        gameplan.remove()
    })
    .then(() => {
        console.log(" removed gameplan data ")
    })
    .then(() => {
        technique.remove()
    })
    .then(()=>{
    console.log("============")
    console.log("closing db")
    console.log("============")
    // close the database
    mongoose.connection.close()
    })
.catch((err) => {
    console.log('ERROR', err)
})
    