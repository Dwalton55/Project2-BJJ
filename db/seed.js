require('dotenv').config()
const mongoose = require('mongoose')
const user = require('../models/users')
const gameplan = require('../models/gameplan')
const belt = require('../models/belt')
const technique = require('../models/technique')

// Connect to Database

//mongoose.connect('mongodb://localhost/bjjtrainer')
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("====================")
        console.log('connected to mongoDB')
        console.log("====================")

    })
    .then(() => {
        console.log('test')
    })

// Remove old Data
console.log('test')

console.log("checkpoint 1 data removed")

//=========================
// techniques
//=========================
//=========================
// techniques offense
//=========================
const openguard1_O = new technique({
    Name: "pass",
    Description: "1 pass guard",
})

const openguard2_O = new technique({
    Name: "pass 2",
    Description: "2nd pass guard",
})

const openguard3_O = new technique({
    Name: "pass 3",
    Description: "3rd pass guard",
})


//=========================
// techniques open deffense
//=========================
const openguard1_D = new technique({
    Name: "Choke defense",
    Description: "1 choke from guard",
})

const openguard2_D = new technique({
    Name: "Joint defense",
    Description: "1 joint defense from guard",
})

const openguard3_D = new technique({
    Name: "double defense",
    Description: "1 double attack from guard",
})

//=========================
// techniques close offense
//=========================
const closeguard1_O = new technique({
    Name: "Choke",
    Description: "1 choke from guard",
})

const closeguard2_O = new technique({
    Name: "Joint",
    Description: "1 joint attack from guard",
})

const closeguard3_O = new technique({
    Name: "double",
    Description: "1 double attack from guard",
})

//=========================
// techniques close defense
//=========================
const closeguard1_D = new technique({
    Name: "Choke",
    Description: "1 choke defense from guard",
})

const closeguard2_D = new technique({
    Name: "Joint",
    Description: "1 joint attack defense from guard",
})

const closeguard3_D = new technique({
    Name: "double",
    Description: "1 double attack defense from guard",
})

//=========================
// techniques Half offense
//=========================
const halfguard1_O = new technique({
    Name: "pass half",
    Description: "1 choke from guard",
})

const halfguard2_O = new technique({
    Name: "pass half",
    Description: "1 joint attack from guard",
})

const halfguard3_O = new technique({
    Name: "pass half",
    Description: "1 double attack from guard",
})
//=========================
// techniques Half defense
//=========================
const halfguard1_D = new technique({
    Name: "block half pass",
    Description: "1 choke defense from guard",
})

const halfguard2_D = new technique({
    Name: "sweep",
    Description: "1 joint attack defense from guard",
})

const halfguard3_D = new technique({
    Name: "attack half guard",
    Description: "1 double attack defense from guard",
})
//=========================
// techniques sidebody offense
//=========================
const sidebody1_O = new technique({
    Name: "attack 1",
    Description: "1 choke from guard",
})

const sidebody2_O = new technique({
    Name: "attack 2",
    Description: "1 joint attack from guard",
})

const sidebody3_O = new technique({
    Name: "attack 3",
    Description: "1 double attack from guard",
})
//=========================
// techniques sidebody defense
//=========================
const sidebody1_D = new technique({
    Name: "escape 1",
    Description: "1 choke defense from guard",
})

const sidebody2_D = new technique({
    Name: "escape 2",
    Description: "1 joint attack defense from guard",
})

const sidebody3_D = new technique({
    Name: "escape 3",
    Description: "1 double attack defense from guard",
})

//=========================
// techniques north south offense
//=========================
const northsouth1_O = new technique({
    Name: "north south attack 1",
    Description: "1 choke from guard",
})

const northsouth2_O = new technique({
    Name: "north south attack 2",
    Description: "1 joint attack from guard",
})

const northsouth3_O = new technique({
    Name: "north south attack 3",
    Description: "1 double attack from guard",
})
//=========================
// techniques north south defense
//=========================
const northsouth1_D = new technique({
    Name: "north south escape 1",
    Description: "1 choke defense from guard",
})

const northsouth2_D = new technique({
    Name: "north south escape 2",
    Description: "1 joint attack defense from guard",
})

const northsouth3_D = new technique({
    Name: "north south escape 3",
    Description: "1 double attack defense from guard",
})

//================================
// techniques kneeon belly offense
//================================
const kneeonbelly1_O = new technique({
    Name: "knee on belly attack 1",
    Description: "1 choke from guard",
})

const kneeonbelly2_O = new technique({
    Name: "knee on belly attack 2",
    Description: "1 joint attack from guard",
})

const kneeonbelly3_O = new technique({
    Name: "knee on belly attack 3",
    Description: "1 double attack from guard",
})
//================================
// techniques kneeon belly defense
//================================
const kneeonbelly1_D = new technique({
    Name: "knee on belly escape 1",
    Description: "1 choke defense from guard",
})

const kneeonbelly2_D = new technique({
    Name: "knee on belly escape 2",
    Description: "1 joint attack defense from guard",
})

const kneeonbelly3_D = new technique({
    Name: "knee on belly escape 3",
    Description: "1 double attack defense from guard",
})

//================================
// techniques fullmount offense
//================================
const fullmount1_O = new technique({
    Name: "full mount attack 1",
    Description: "1 choke from guard",
})

const fullmount2_O = new technique({
    Name: "full mount attack 2",
    Description: "1 joint attack from guard",
})

const fullmount3_O = new technique({
    Name: "full mount attack 3",
    Description: "1 double attack from guard",
})
//================================
// techniques fullmount defense
//================================
const fullmount1_D = new technique({
    Name: "full mount escape 1",
    Description: "1 choke defense from guard",
})

const fullmount2_D = new technique({
    Name: "full mount escape 2",
    Description: "1 joint attack defense from guard",
})

const fullmount3_D = new technique({
    Name: "full mount escape 3",
    Description: "1 double attack defense from guard",
})
//================================
// techniques back control offense
//================================
const backcontroll1_O = new technique({
    Name: "backcontroll attack 1",
    Description: "1 choke from guard",
})

const backcontroll2_O = new technique({
    Name: "backcontroll attack 2",
    Description: "1 joint attack from guard",
})

const backcontroll3_O = new technique({
    Name: "backcontroll attack 3",
    Description: "1 double attack from guard",
})
//================================
// techniques back control defense
//================================
const backcontroll1_D = new technique({
    Name: "backcontroll escape 1",
    Description: "1 choke defense from guard",
})

const backcontroll2_D = new technique({
    Name: "backcontroll escape 2",
    Description: "1 joint attack defense from guard",
})

const backcontroll3_D = new technique({
    Name: "backcontroll escape 3",
    Description: "1 double attack defense from guard",
})

//================================
// techniques takedown offense
//================================
const takedown1_O = new technique({
    Name: "takedown attack 1",
    Description: "1 choke from guard",
})

const takedown2_O = new technique({
    Name: "takedown attack 2",
    Description: "1 joint attack from guard",
})

const takedown3_O = new technique({
    Name: "takedown attack 3",
    Description: "1 double attack from guard",
})
//================================
// techniques takedown defense
//================================
const takedown1_D = new technique({
    Name: "takedown escape 1",
    Description: "1 choke defense from guard",
})

const takedown2_D = new technique({
    Name: "takedown escape 2",
    Description: "1 joint attack defense from guard",
})

const takedown3_D = new technique({
    Name: "takedown escape 3",
    Description: "1 double attack defense from guard",
})
//================================
// techniques turtle position
//================================
const turtleposition1 = new technique({
    Name: "turtle position 1",
    Description: "1 choke defense from guard",
})

const turtleposition2 = new technique({
    Name: "turtle position 2",
    Description: "1 joint attack defense from guard",
})

const turtleposition3 = new technique({
    Name: "turtle position 3",
    Description: "1 double attack defense from guard",
})
console.log("checkpoint 2 techniques written")
const techniques = [openguard1_O, openguard2_O, openguard3_O, openguard1_D, openguard2_D, openguard3_D, closeguard1_O, closeguard2_O, closeguard3_O, closeguard1_D, closeguard2_D, closeguard3_D, halfguard1_O, halfguard2_O, halfguard3_O, halfguard1_D, halfguard2_D, halfguard3_D, sidebody1_O, sidebody2_O, sidebody3_O, sidebody1_D, sidebody2_D, sidebody3_D, northsouth1_O, northsouth2_O, northsouth3_O, northsouth1_D, northsouth2_D, northsouth3_D, kneeonbelly1_O, kneeonbelly2_O, kneeonbelly3_O, kneeonbelly1_O, kneeonbelly2_O, kneeonbelly3_O, fullmount1_O, fullmount2_O, fullmount3_O, fullmount1_D, fullmount2_D, fullmount3_D, backcontroll1_O, backcontroll2_O, backcontroll3_O, backcontroll1_D, backcontroll2_D, backcontroll3_D, takedown1_O, takedown2_O, takedown3_O, takedown1_D, takedown2_D, takedown3_D, turtleposition1, turtleposition2, turtleposition3]

console.log("checkpoint 3 techniques added")
//======================
//belt game plans
//======================
const bluebelt = new gameplan({
    planname:"blue belt requirments",
    targetbelt:"Blue Belt",
    openguardOffense: {
        position: "openguardOffense"  ,
       techniques: [openguard1_O, openguard2_O, openguard3_O]
    },
    openguardDefense: {
        position:  "openguardDefense",
       techniques: [openguard1_D, openguard2_D, openguard3_D]
    },
    closeguardOffense: {
        position: "closeguardOffense" ,
       techniques: [closeguard1_O, closeguard2_O, closeguard3_O]
    },
    closeguardDefense: {
        position:  "closeguardDefense",
       techniques: [closeguard1_D, closeguard2_D, closeguard3_D]
    },
    halfguardOffense: {
        position: "halfguardOffense" ,
       techniques: [halfguard1_O, halfguard2_O, halfguard3_O]
    },
    halfguardDeffense: {
        position: "halfguardDeffense" ,
       techniques: [halfguard1_D, halfguard2_D, halfguard3_D]
    },
    sidebodyOffense: {
        position: "sidebodyOffense" ,
       techniques: [sidebody1_O, sidebody2_O, sidebody3_O]
    },
    sidebodyDefense: {
        position: "sidebodyDefense" ,
       techniques: [sidebody1_D, sidebody2_D, sidebody3_D]
    },
    northsouthOffense: {
        position: "northsouthOffense" ,
       techniques: [northsouth1_O, northsouth2_O, northsouth3_O]
    },
    northsouthDefense: {
        position: "northsouthDefense" ,
       techniques: [northsouth1_D, northsouth2_D, northsouth3_D]
    },
    kneeonbellyOffense: {
        position: "kneeonbellyOffense" ,
       techniques: [kneeonbelly1_O, kneeonbelly2_O, kneeonbelly3_O]
    },
    kneeonbellyDefense: {
        position:  "kneeonbellyDefense",
       techniques: [kneeonbelly1_O, kneeonbelly2_O, kneeonbelly3_O]
    },
    fullmountOffense: {
        position: "fullmountOffense" ,
       techniques: [fullmount1_O, fullmount2_O, fullmount3_O]
    },
    fullmountDefense: {
        position: "fullmountDefense" ,
       techniques: [fullmount1_D, fullmount2_D, fullmount3_D]
    },
    backcontrolOffense: {
        position: "backcontrolOffense" ,
       techniques: [backcontroll1_O, backcontroll2_O, backcontroll3_O]
    },
    backcontrolDefense: {
        position:  "backcontrolDefense",
       techniques: [backcontroll1_D, backcontroll2_D, backcontroll3_D]
    },
    takedownOffense: {
        position: "takedownOffense" ,
       techniques: [takedown1_O, takedown2_O, takedown3_O]
    },
    takedownDefense: {
        position: "takedownDefense" ,
       techniques: [takedown1_D, takedown2_D, takedown3_D]
    },
    turtleposition: {
        position: "turtleposition" ,
       techniques: [turtleposition1, turtleposition2, turtleposition3]
    },
})

const purplebelt = new gameplan({
    planname:"purple belt requirments",
    targetbelt:"purple Belt",
    openguardOffense: {
        position: "openguardOffense"  ,
       techniques: [openguard1_O, openguard2_O, openguard3_O]
    },
    openguardDefense: {
        position: "closeguardOffense" ,
       techniques: [openguard1_D, openguard2_D, openguard3_D]
    },
    closeguardOffense: {
        position: "openguardDefense" ,
       techniques: [closeguard1_O, closeguard2_O, closeguard3_O]
    },
    closeguardDefense: {
        position:  "closeguardDefense",
       techniques: [closeguard1_D, closeguard2_D, closeguard3_D]
    },
    halfguardOffense: {
        position: "halfguardOffense" ,
       techniques: [halfguard1_O, halfguard2_O, halfguard3_O]
    },
    halfguardDeffense: {
        position: "halfguardDeffense" ,
       techniques: [halfguard1_D, halfguard2_D, halfguard3_D]
    },
    sidebodyOffense: {
        position: "sidebodyOffense" ,
       techniques: [sidebody1_O, sidebody2_O, sidebody3_O]
    },
    sidebodyDefense: {
        position: "sidebodyDefense" ,
       techniques: [sidebody1_D, sidebody2_D, sidebody3_D]
    },
    northsouthOffense: {
        position: "northsouthOffense" ,
       techniques: [northsouth1_O, northsouth2_O, northsouth3_O]
    },
    northsouthDefense: {
        position: "northsouthDefense" ,
       techniques: [northsouth1_D, northsouth2_D, northsouth3_D]
    },
    kneeonbellyOffense: {
        position: "kneeonbellyOffense" ,
       techniques: [kneeonbelly1_O, kneeonbelly2_O, kneeonbelly3_O]
    },
    kneeonbellyDefense: {
        position:  "kneeonbellyDefense",
       techniques: [kneeonbelly1_O, kneeonbelly2_O, kneeonbelly3_O]
    },
    fullmountOffense: {
        position: "fullmountOffense" ,
       techniques: [fullmount1_O, fullmount2_O, fullmount3_O]
    },
    fullmountDefense: {
        position: "fullmountDefense" ,
       techniques: [fullmount1_D, fullmount2_D, fullmount3_D]
    },
    backcontrolOffense: {
        position: "backcontrolOffense" ,
       techniques: [backcontroll1_O, backcontroll2_O, backcontroll3_O]
    },
    backcontrolDefense: {
        position:  "backcontrolDefense",
       techniques: [backcontroll1_D, backcontroll2_D, backcontroll3_D]
    },
    takedownOffense: {
        position: "takedownOffense" ,
       techniques: [takedown1_O, takedown2_O, takedown3_O]
    },
    takedownDefense: {
        position: "takedownDefense" ,
       techniques: [takedown1_D, takedown2_D, takedown3_D]
    },
    turtleposition: {
        position: "turtleposition" ,
       techniques: [turtleposition1, turtleposition2, turtleposition3]
    },
})


const brownbelt = new gameplan({
    planname:"brown belt requirments",
    targetbelt:"brown Belt",
    openguardOffense: {
        position: "openguardOffense"  ,
       techniques: [openguard1_O, openguard2_O, openguard3_O]
    },
    openguardDefense: {
        position: "closeguardOffense" ,
       techniques: [openguard1_D, openguard2_D, openguard3_D]
    },
    closeguardOffense: {
        position: "openguardDefense" ,
       techniques: [closeguard1_O, closeguard2_O, closeguard3_O]
    },
    closeguardDefense: {
        position:  "closeguardDefense",
       techniques: [closeguard1_D, closeguard2_D, closeguard3_D]
    },
    halfguardOffense: {
        position: "halfguardOffense" ,
       techniques: [halfguard1_O, halfguard2_O, halfguard3_O]
    },
    halfguardDeffense: {
        position: "halfguardDeffense" ,
       techniques: [halfguard1_D, halfguard2_D, halfguard3_D]
    },
    sidebodyOffense: {
        position: "sidebodyOffense" ,
       techniques: [sidebody1_O, sidebody2_O, sidebody3_O]
    },
    sidebodyDefense: {
        position: "sidebodyDefense" ,
       techniques: [sidebody1_D, sidebody2_D, sidebody3_D]
    },
    northsouthOffense: {
        position: "northsouthOffense" ,
       techniques: [northsouth1_O, northsouth2_O, northsouth3_O]
    },
    northsouthDefense: {
        position: "northsouthDefense" ,
       techniques: [northsouth1_D, northsouth2_D, northsouth3_D]
    },
    kneeonbellyOffense: {
        position: "kneeonbellyOffense" ,
       techniques: [kneeonbelly1_O, kneeonbelly2_O, kneeonbelly3_O]
    },
    kneeonbellyDefense: {
        position:  "kneeonbellyDefense",
       techniques: [kneeonbelly1_O, kneeonbelly2_O, kneeonbelly3_O]
    },
    fullmountOffense: {
        position: "fullmountOffense" ,
       techniques: [fullmount1_O, fullmount2_O, fullmount3_O]
    },
    fullmountDefense: {
        position: "fullmountDefense" ,
       techniques: [fullmount1_D, fullmount2_D, fullmount3_D]
    },
    backcontrolOffense: {
        position: "backcontrolOffense" ,
       techniques: [backcontroll1_O, backcontroll2_O, backcontroll3_O]
    },
    backcontrolDefense: {
        position:  "backcontrolDefense",
       techniques: [backcontroll1_D, backcontroll2_D, backcontroll3_D]
    },
    takedownOffense: {
        position: "takedownOffense" ,
       techniques: [takedown1_O, takedown2_O, takedown3_O]
    },
    takedownDefense: {
        position: "takedownDefense" ,
       techniques: [takedown1_D, takedown2_D, takedown3_D]
    },
    turtleposition: {
        position: "turtleposition" ,
       techniques: [turtleposition1, turtleposition2, turtleposition3]
    },
})

const blackbelt = new gameplan({
    planname:"black belt requirments",
    targetbelt:"black Belt",
    openguardOffense: {
        position: "openguardOffense"  ,
       techniques: [openguard1_O, openguard2_O, openguard3_O]
    },
    openguardDefense: {
        position: "closeguardOffense" ,
       techniques: [openguard1_D, openguard2_D, openguard3_D]
    },
    closeguardOffense: {
        position: "openguardDefense" ,
       techniques: [closeguard1_O, closeguard2_O, closeguard3_O]
    },
    closeguardDefense: {
        position:  "closeguardDefense",
       techniques: [closeguard1_D, closeguard2_D, closeguard3_D]
    },
    halfguardOffense: {
        position: "halfguardOffense" ,
       techniques: [halfguard1_O, halfguard2_O, halfguard3_O]
    },
    halfguardDeffense: {
        position: "halfguardDeffense" ,
       techniques: [halfguard1_D, halfguard2_D, halfguard3_D]
    },
    sidebodyOffense: {
        position: "sidebodyOffense" ,
       techniques: [sidebody1_O, sidebody2_O, sidebody3_O]
    },
    sidebodyDefense: {
        position: "sidebodyDefense" ,
       techniques: [sidebody1_D, sidebody2_D, sidebody3_D]
    },
    northsouthOffense: {
        position: "northsouthOffense" ,
       techniques: [northsouth1_O, northsouth2_O, northsouth3_O]
    },
    northsouthDefense: {
        position: "northsouthDefense" ,
       techniques: [northsouth1_D, northsouth2_D, northsouth3_D]
    },
    kneeonbellyOffense: {
        position: "kneeonbellyOffense" ,
       techniques: [kneeonbelly1_O, kneeonbelly2_O, kneeonbelly3_O]
    },
    kneeonbellyDefense: {
        position:  "kneeonbellyDefense",
       techniques: [kneeonbelly1_O, kneeonbelly2_O, kneeonbelly3_O]
    },
    fullmountOffense: {
        position: "fullmountOffense" ,
       techniques: [fullmount1_O, fullmount2_O, fullmount3_O]
    },
    fullmountDefense: {
        position: "fullmountDefense" ,
       techniques: [fullmount1_D, fullmount2_D, fullmount3_D]
    },
    backcontrolOffense: {
        position: "backcontrolOffense" ,
       techniques: [backcontroll1_O, backcontroll2_O, backcontroll3_O]
    },
    backcontrolDefense: {
        position:  "backcontrolDefense",
       techniques: [backcontroll1_D, backcontroll2_D, backcontroll3_D]
    },
    takedownOffense: {
        position: "takedownOffense" ,
       techniques: [takedown1_O, takedown2_O, takedown3_O]
    },
    takedownDefense: {
        position: "takedownDefense" ,
       techniques: [takedown1_D, takedown2_D, takedown3_D]
    },
    turtleposition: {
        position: "turtleposition" ,
       techniques: [turtleposition1, turtleposition2, turtleposition3]
    },
})
const gameplans = [bluebelt, purplebelt, brownbelt, blackbelt]


console.log("checkpoint 4 gameplans created and added")
//==========================
// Belt info 
//==========================
const blue = new belt({
    color: "Blue",
    requirements: bluebelt
})
const purple = new belt({
    color: "Purple",
    requirements: purplebelt
})
const brown = new belt({
    color: "Brown",
    requirements: brownbelt
})
const black = new belt({
    color: "Black",
    requirements: blackbelt
})

const belts = [blue, purple, brown, black]

console.log("checkpoint 5 belts added and created")
//===========================
// Test User Data
//===========================
const user1 = new user({
    name: "Deon",
    school: "Independant MMA",
    coach: "Chris Ruiz",
    currentBelt: blue,
    targetBelt: purple,
    gamePlans: [bluebelt],
    trainingplans: [],
    tournaments: [],
    pastbelts: ["White"]
})
const user2 = new user({
    name: "Destin",
    school: "Independant MMA",
    coach: "Jon Ryan",
    currentBelt: blue,
    targetBelt: purple,
    gamePlans: [bluebelt],
    trainingplans: [],
    tournaments: [],
    pastbelts: ["White"]
})
const user3 = new user({
    name: "Jon Ryan",
    school: "Independant MMA",
    coach: "Chris Ruiz",
    currentBelt: brown,
    targetBelt: black,
    gamePlans: [brownbelt],
    trainingplans: [],
    tournaments: [],
    pastbelts: ["White", "blue", "purple"]
})
const user4 = new user({
    name: "Chris",
    school: "Independant MMA",
    coach: "Byron Stone",
    currentBelt: black,
    gamePlans: [blackbelt],
    trainingplans: [],
    tournaments: [],
    pastbelts: ["White", "blue", "purple", "brown"]
})

const users = [user1, user2, user3, user4]

// save test data

console.log("checkpoint 6 users added and created")

user.remove()
    .then(() => {
        console.log(" removed user data")
        return belt.remove()
    })
    .then(() => {
        console.log(" removed belt data")
        return gameplan.remove()
    })
    .then(() => {
        console.log(" removed gameplan data ")
        return technique.remove()
    })
    .then(() => {
        const promises = [
            // technique.insertMany(techniques),
            gameplan.insertMany(gameplans),
            belt.insertMany(belts),
            user.insertMany(users)
        ]
        // return Promise.all() makes it so an array of promises don't return before they are all complete
        return Promise.all(promises)
    })
    .then(() => {
        console.log("============")
        console.log("closing db")
        console.log("============")
        // close the database
        mongoose.connection.close()
    }).catch((err) => {
        console.log('ERROR', err)
    })
