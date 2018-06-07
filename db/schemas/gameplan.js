//requirements: require mongoose
const Schema = require('mongoose').Schema



const gameplanSchema = new Schema({
    openguardOffense:[],
    openguardDefense:[],
    closeguardOffense:[],
    closeguardDefense:[],
    halfguardOffense:[],
    halfguardDeffense:[],
    sidebodyOffense:[],
    sidebodyDefense:[],
    northsouthOffense:[],
    northsouthDefense:[],
    kneeonbellyOffense:[],
    kneeonbellyDefense:[],
    fullmountOffense:[],
    fullmountDefense:[],
    backcontrolOffense:[],
    backcontrolDefense:[],
    takedownOffense:[],
    takedownDefense:[],
    turtleposition:[],



})

module.exports = gameplanSchema