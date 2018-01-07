const mongoose = require('mongoose')
const Schema = require('../schema')

const Wheels = mongoose.model('Wheels', Schema.WheelsSchema)

module.exports = Wheels