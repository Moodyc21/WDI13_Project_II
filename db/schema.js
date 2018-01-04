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

const CompleteSchema = new Schema(
    {
        decks: [DeckSchema]

    },
    {
        timestamps: {}
    }
)

const UserSchema = new Schema(
    {
        name: {
            type: String, 
            required: [true, 'Name is required!']
        },
        stance: {
            type: String, 
            required: [true, 'Stance is required!']
        },
        myBoard: [CompleteSchema]
    },
    {
        timestamps: {},
        usePushEach: true
    }
)

module.exports = {
    DeckSchema, 
    CompleteSchema,
    UserSchema
}