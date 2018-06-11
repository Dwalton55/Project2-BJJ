const express = require('express')
const router = express.Router({ mergeParams: true })
const User = require('../models/users')
const Gameplan = require('../models/gameplan')
const Technique = require('../models/technique')

//index
router.get('/', (req, res) => {
    const userid = req.params.id
    const gameplan = req.params.gameid
    const positionid =req.params.posid
    User.findById(userid)
    .then((userGP) => {
      const gameplans = userGP.gamePlans.id(gameplan)[positionid]
      console.log(gameplans)
    //   console.log(gameplans)
      res.render('user/gameplan/techniques/techniqueIndex', {
        userid,
        gameplans,

      })
    })
  })
//new
router.get('/new', (req, res) => {
    res.render('user/gameplan/techniques/techniqueNew', {
      position: req.params.posid,
      userID: req.params.id,
      gameplan: req.params.gameid,
      positionid: req.params.posid
    })
  })
//creat
router.post('/', (req, res) => {

    // make comment req.body
    const technique = new Technique(req.body)
    const userid = req.params.id
    const gameplan = req.params.gameid
    const positionid =req.params.posid
    // get user by the id
    User.findById(req.params.id)
      .then((userID) => {
  
        // push new gameplan to gamePlans
        userID.gamePlans.id(gameplan)[positionid].techniques.push(technique)
        console.log(userID + "test userid")
        console.log(userID.gameplans + "test gameplans")
        console.log(positionid + "test posid")
        console.log(positionid.techniques + "test techniques")

        // save the gameplan
        return userID.save()
      })
      .then(() => {
  
        // redirect to gameplans
        // /user/:id/gameplans/:gameid/:posid
        res.redirect(`/user/${req.params.id}/gameplans/${req.params.gameid}/${req.params.posid}`)
      })
  })

//show
//eidt
//update
//delete

module.exports = router