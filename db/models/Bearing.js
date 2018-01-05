const mongoose = require('mongoose')
const Schema = require('../schema')

const Bearings = mongoose.model('Bearings', Schema.BearingSchema)

module.exports = Bearings 