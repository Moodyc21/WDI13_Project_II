const mongoose = require('mongoose')
const Schema = require('../schema')

const Trucks = mongoose.model('Trucks', Schema.TrucksSchema)

module.exports = Trucks