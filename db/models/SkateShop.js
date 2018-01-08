const mongoose = require('mongoose')
const Schema = require('../schema')

const SkateShop = mongoose.model('Store', Schema.SkateShopSchema)

module.exports = SkateShop