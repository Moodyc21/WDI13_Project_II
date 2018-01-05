const mongoose = require('mongoose')
const Schema = require('../schema')

const Hardware = mongoose.model('Hardware', Schema.HardwareSchema)

module.exports = Hardware