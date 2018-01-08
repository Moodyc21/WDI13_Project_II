const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const CompleteSchema = new Schema(
    {
        name: {
            type: String, 
            required: [true, 'Name is required!']
        },
        deck: {
            type: String,
            required: [true, 'Deck is required!']
        },
        trucks: {
            type: String,
            required: [true, 'Trucks are required!']
        },
        wheels: {
            type: String,
            required: [true, 'Wheels are required!']
        },
        bearings: {
            type: String,
            required: [true, 'Bearings are required!']
        },
        gripTape: {
            type: String,
            required: [true, 'Griptape is required!']
        },
        hardware: {
            type: String,
            required: [true, 'Hardware is required!']
        }
    },
    {
        timestamps: {}
    }
)

const SkateShopSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'SkateShop name is required!']
        },
        location: {
            type: String
        },
        myComplete: [CompleteSchema]
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
        nickName: {
            type: String
        },
        stance: {
            type: String,
            required: [true, 'Stance is required!']
        },
        photoUrl: {
            type: String,
            default: 'https://i.imgur.com/3ggmLxE.jpg'
        },
        shops: [SkateShopSchema]
    },
    {
        timestamps: {},
        usePushEach: true
    }
)

module.exports = {
    UserSchema,
    SkateShopSchema,
    CompleteSchema
}
