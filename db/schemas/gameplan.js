//requirements: require mongoose
const Schema = require('mongoose').Schema
const techniqueSchema = require('./technique')
const positionSchema = require('./positions')

const gameplanSchema = new Schema({
    planname: String,
    targetbelt: String,
    openguardOffense: positionSchema,
    openguardDefense: positionSchema,
    openguardOffense: positionSchema,
    closeguardOffense: positionSchema,
    closeguardDefense: positionSchema,
    halfguardOffense: positionSchema,
    halfguardDeffense: positionSchema,
    sidebodyOffense: positionSchema,
    sidebodyDefense: positionSchema,
    northsouthOffense: positionSchema,
    northsouthDefense: positionSchema,
    kneeonbellyOffense: positionSchema,
    kneeonbellyDefense: positionSchema,
    fullmountOffense: positionSchema,
    fullmountDefense: positionSchema,
    backcontrolOffense: positionSchema,
    backcontrolDefense: positionSchema,
    takedownOffense: positionSchema,
    takedownDefense: positionSchema,
    turtleposition: positionSchema,

})

module.exports = gameplanSchema



// openguardDefense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// closeguardOffense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// closeguardDefense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// halfguardOffense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// halfguardDeffense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// sidebodyOffense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// sidebodyDefense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// northsouthOffense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// northsouthDefense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// kneeonbellyOffense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// kneeonbellyDefense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// fullmountOffense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// fullmountDefense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// backcontrolOffense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// backcontrolDefense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// takedownOffense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// takedownDefense:{
//     position:String,
//     techniques:[techniqueSchema]
// },
// turtleposition:{
//     position:String,
//     techniques:[techniqueSchema]
// },