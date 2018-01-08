const express = require('express')
const router = express.Router()
const User = require('../db/models/User')

router.get('/', (req, res, next) => {
  User.find({})
    .then((users) => {
      res.render('users/index', {
        users,
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/new', (req, res, next) => {
  res.render('users/new', { pageTitle: 'New Skater' })
})

router.post('/', (req, res, next) => {
  const newUser = req.body
  if (!newUser.photoUrl) {
    newUser.photoUrl = 'https://i.imgur.com/3ggmLxE.jpg'
  }

  User.create(newUser)
    .then(() => {
      res.redirect('/users')
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/:userId', (req, res, next) => {
  const userId = req.params.userId
  User.findById(userId)
    .then((user) => {
      res.render('users/show', {
        user,
        pageTitle: user.name
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/:userId/edit', (req, res, next) => {
  const userId = req.params.userId

  User.findById(userId)
    .then((user) => {
      res.render('users/edit', {
        user,
        pageTitle: 'Edit Skater'
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/:userId/delete', (req, res, next) => {
  const userId = req.params.userId

  User.findByIdAndRemove(userId)
    .then(() => {
      res.redirect('/users')
    })
    .catch((error) => {
      console.log(error)
    })
})

router.put('/:userId', (req, res, next) => {
  const userId = req.params.userId
  const updatedUserInfo = req.body

  User.findByIdAndUpdate(userId, updatedUserInfo, { new: true })
    .then(() => {
      res.redirect(`/users/${userId}`)
    })
})

module.exports = router