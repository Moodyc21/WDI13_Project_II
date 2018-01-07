const mongoose = require('mongoose')
const Schema = require('../schema')

const Bearings = mongoose.model('Bearings', Schema.BearingsSchema)

module.exports = Bearings 