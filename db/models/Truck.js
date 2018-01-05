const mongoose = require('mongoose')
const Schema = require('../schema')

const Trucks = mongoose.model('Trucks', Schema.TruckSchema)

module.exports = Trucks