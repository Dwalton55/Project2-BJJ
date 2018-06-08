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
//creat
//show
//eidt
//update
//delete

module.exports = router