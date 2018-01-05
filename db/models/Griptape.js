const mongoose = require('mongoose')
const Schema = require('../schema')

const GripTape = mongoose.model('GripTape', Schema.GripTapeSchema)

module.exports = GripTape 