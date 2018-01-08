const mongoose = require('mongoose')
const Schema = require('../schema')

const Complete = mongoose.model('Complete', Schema.CompleteSchema)

module.exports = Complete 