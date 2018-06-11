const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../models/users')
const Gameplan = require('../models/gameplan')


router.get('/', (req, res, next) => {

    
    User.findById(req.params.id)
      .then((userGP) => {
        const gameplans = userGP.gamePlans
        res.render('user/gameplan/gameplanIndex', {
          userGP,
          gameplans
        })
      })
    })

// new
router.get('/new', (req, res) => {
  res.render('user/gameplan/gameplanNew', {
    userID: req.params.id
  })
})

//create 
router.post('/', (req, res) => {

    // make comment req.body
    const gameplan = new Gameplan(req.body)
  
    // get user by the id
    User.findById(req.params.id)
      .then((userID) => {
  
        // push new gameplan to gamePlans
        userID.gamePlans.push(gameplan)
  
        // save the gameplan
        return userID.save()
      })
      .then(() => {
  
        // redirect to gameplans
        res.redirect(`/user/${req.params.id}/gameplans`)
      })
  })

  //show
router.get('/:gameid', (req, res) => {
    const userid = req.params.id
    const gameplan = req.params.gameid
    User.findById(userid)
    .then((userGP) => {
        console.log(userGP.gamePlans)
      const gameplans = userGP.gamePlans.id(gameplan)
      res.render('user/gameplan/gameplanShow', {
        userGP,
        userid,
        gameplans,

      })
    })
  })

  //edit
  //update
  //delete
module.exports = router