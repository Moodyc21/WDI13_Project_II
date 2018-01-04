const mongoose = require('mongoose')
const Schema = require('../schema')

const Deck = mongoose.model('Deck', Schema.GiftSchema)

module.exports = Deck