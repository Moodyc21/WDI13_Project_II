const express = require('express')
const router = express.Router({ mergeParams: true })

const User = require('../db/models/User')

router.get('/new', (req, res, next) => {
    const userId = req.params.userId
    const skateShopId = req.params.skateShopId

    User.findById(userId)
        .then((user) => {
            const skateShop = user.shops.id(skateShopId)

            res.render('complete/new', {
                userId,
                skateShop,
                pageTitle: 'New Complete'
            })
        })
})

router.post('/', (req, res, next) => {
    const userId = req.params.userId
    const skateShopId = req.params.skateShopId

    const newComplete = req.body

    User.findById(userId)
        .then((user) => {
            const skateShop = user.shops.id(skateShopId)
            skateShop.myComplete.push(newComplete)

            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${userId}/skateShop/${skateShopId}`)
        })
})

router.get('/:completeId', (req, res, next) => {
    const userId = req.params.userId
    const skateShopId = req.params.skateShopId
    const completeId = req.params.completeId

    User.findById(userId)
        .then((user) => {
            const skateShop = user.shops.id(skateShopId)
            const complete = skateShop.myComplete.id(completeId)

            res.render('complete/show', {
                userId,
                skateShop,
                complete,
                pageTitle: 'Completes'
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

router.get('/:completeId/delete', (req, res, next) => {
    const userId = req.params.userId
    const skateShopId = req.params.skateShopId
    const completeId = req.params.completeId

    User.findById(userId)
        .then((user) => {
            const skateShop = user.shops.id(skateShopId)
            skateShop.myComplete.id(completeId).remove()

            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${userId}/skateShop/${skateShopId}`)
        })
        .catch((error) => {
            console.log(error)
        })
})

module.exports = router
