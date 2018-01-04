
const mongoose = require('mongoose')
const Schema = require('../Schema')
 
const Complete = mongoose.model('Complete', Schema.CompleteSchema)

module.exports = Complete 