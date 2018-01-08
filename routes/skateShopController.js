const express = require('express')
const router = express.Router({ mergeParams: true })

const User = require('../db/models/User')

router.get('/', (req, res, next) => {
  const userId = req.params.userId

  User.findById(userId)
    .then((user) => {
      res.render('skateShop/index', {
        Name: `${user.name} -- ${user.nickName}`,
        userId: user._id,
        skateShop: user.shops,
        pageTitle: 'SkateShops'
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.get('/new', (req, res, next) => {
  const userId = req.params.userId

  res.render('skateShop/new', {
    userId,
    pageTitle: 'New SkateShop'
  })
})

router.get('/:skateShopId', (req, res, next) => {
  const userId = req.params.userId
  const skateShopId = req.params.skateShopId

  User.findById(userId)
    .then((user) => {
      const skateShop = user.shops.id(skateShopId)
      res.render('skateShop/show', {
        userId,
        skateShop,
        pageTitle: 'SkateShop'
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

router.post('/', (req, res, next) => {
  const userId = req.params.userId
  const newSkateShop = req.body

  User.findById(userId)
    .then((user) => {
      user.shops.push(newSkateShop)
      return user.save()
    })
    .then(() => {
      res.redirect(`/users/${userId}/skateShop`)
    })
    .catch((error) => {
      console.log(error)
    })

})

router.get('/:skateShopId/delete', (req, res, next) => {
  const userId = req.params.userId
  const skateShopId = req.params.skateShopId

  User.findById(userId)
    .then((user) => {
      user.shops.id(skateShopId).remove()
      return user.save()
    })
    .then(() => {
      res.redirect(`/users/${userId}/skateShop/`)
    })
    .catch((error) => {
      console.log(error)
    })
})

module.exports = router