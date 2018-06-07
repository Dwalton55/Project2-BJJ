const express = require('express')
const router = express.Router()
const User = require('../models/users')


router.get('/', (req, res, next) => {

    // Find all Users
    User
      .find()
      .then((listofUsers) => {
  
        // Once you have all homework, then render out index page homeworks is all
        // pieces of data that match the Homework Model
        res.render('user/userIndex', { listofUsers })
      })
      .catch((err) => res.send(err))
  
  })

// new
router.get('/new', (req, res) => {
  res.render('user/userNew')
})
//create
router.post('/', (req, res) => {
  const newUser = req.body
  User
    .create(newUser)
    .then(() => {
      res.redirect('/users')
    })
})
//show
//edit
//update
//delete

module.exports = router