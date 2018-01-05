const mongoose = require('mongoose')
const Schema = require('../schema')

const Wheels = mongoose.model('Wheels', Schema.WheelSchema)

module.exports = Wheels