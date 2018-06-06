const mongoose = require('mongoose')
const user = require('../models/user')
const gameplan = require('../models/gameplan')
const belt = require('../models/belt')
const technique = require('../models/technique')

// Connect to Database
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("====================")
  console.log('connected to mongoDB')
  console.log("====================")
})
.catch((err) => {
  console.log('ERROR', err)
})
// Remove old Data
user.remove()
belt.remove()
gameplan.remove()
technique.remove()
.then(()=>{


  const bluebelt = new gameplan({
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

  const purplebelt = new gameplan({
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

  const brownbelt = new gameplan({
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

  const blackbelt = new gameplan({
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
//==========================
// Belt info 
//==========================
const blue = new belt({
    color : "Blue",
    requirements: {}
})
const purple = new belt({
    color : "Purple",
    requirements: {}
})
const brown= new belt({
    color : "Brown",
    requirements: {}
})
const black = new belt({
    color : "Black",
    requirements: {}
})

const belts = [ blue, purple, brown, black ]

//===========================
// Test User Data
//===========================
    const user1 = new user({
        name : "Deon",
        school: "Independant MMA",
        coach: "Chris Ruiz",
        currentBelt: blue,
        targetBelt: purple,
        gamePlans: [BlueBelt],
        trainingplans:[],
        tournaments:[],
        pastbelts:["White"]
    })
    const user2 = new user({
        name : "Destin",
        school: "Independant MMA",
        coach: "Jon Ryan",
        currentBelt: blue,
        targetBelt: purple,
        gamePlans: [BlueBelt],
        trainingplans:[],
        tournaments:[],
        pastbelts:["White"]
    })
    const user3 = new user({
        name : "Jon Ryan",
        school: "Independant MMA",
        coach: "Chris Ruiz",
        currentBelt: brown,
        targetBelt: black,
        gamePlans: [BlackBelt],
        trainingplans:[],
        tournaments:[],
        pastbelts:["White","blue","purple"]
    })
    const user4 = new user({
        name : "Chris",
        school: "Independant MMA",
        coach: "Byron Stone",
        currentBelt: black,
        gamePlans:[BlueBelt],
        trainingplans:[],
        tournaments:[],
        pastbelts:["White","blue","purple","brown"]
    })

    const users = [ user1, user2, user3, user4 ]

    // save test data
    return user.insertMany(users)
  })
  .then(() => {

    // close the database
    mongoose.connection.close()
  })
