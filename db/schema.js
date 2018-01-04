const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const DeckSchema = new Schema(
    {
        company: {
            type: String,
            required: [true, 'Deck company is required!']
        },
        size: {
            type: Number
        },
        shape: {
            type: String
        },

    },
    {
        timestamps: {}
    }
)

module.exports = {
    DeckSchema
}