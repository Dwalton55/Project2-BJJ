//requirements: require mongoose
const Schema = require('mongoose').Schema



const gameplanSchema = new Schema({
    planname:String,
    targetbelt:String,
    openguardOffense:{
        position:String,
        techniques:[]
    },
    openguardDefense:{
        position:String,
        techniques:[]
    },
    closeguardOffense:{
        position:String,
        techniques:[]
    },
    closeguardDefense:{
        position:String,
        techniques:[]
    },
    halfguardOffense:{
        position:String,
        techniques:[]
    },
    halfguardDeffense:{
        position:String,
        techniques:[]
    },
    sidebodyOffense:{
        position:String,
        techniques:[]
    },
    sidebodyDefense:{
        position:String,
        techniques:[]
    },
    northsouthOffense:{
        position:String,
        techniques:[]
    },
    northsouthDefense:{
        position:String,
        techniques:[]
    },
    kneeonbellyOffense:{
        position:String,
        techniques:[]
    },
    kneeonbellyDefense:{
        position:String,
        techniques:[]
    },
    fullmountOffense:{
        position:String,
        techniques:[]
    },
    fullmountDefense:{
        position:String,
        techniques:[]
    },
    backcontrolOffense:{
        position:String,
        techniques:[]
    },
    backcontrolDefense:{
        position:String,
        techniques:[]
    },
    takedownOffense:{
        position:String,
        techniques:[]
    },
    takedownDefense:{
        position:String,
        techniques:[]
    },
    turtleposition:{
        position:String,
        techniques:[]
    },



})

module.exports = gameplanSchema