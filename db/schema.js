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

const TruckSchema = new Schema(
    {
        company: {
            type: String,
            required: [true, 'Deck company is required!']
        },
        size: {
            type: Number
        },

    },
    {
        timestamps: {}
    }
)

const WheelSchema = new Schema(
    {
        company: {
            type: String,
            required: [true, 'Deck company is required!']
        },
        size: {
            type: Number
        },

    },
    {
        timestamps: {}
    }
)

const BearingSchema = new Schema(
    {
        company: {
            type: String,
            required: [true, 'Deck company is required!']
        },
        Abec: {
            type: Number
        },

    },
    {
        timestamps: {}
    }
)

const GripTapeSchema = new Schema(
    {
        company: {
            type: String,
            required: [true, 'Deck company is required!']
        },
        grit: {
            type: Number
        },

    },
    {
        timestamps: {}
    }
)

const HardwareSchema = new Schema(
    {
        company: {
            type: String,
            required: [true, 'Deck company is required!']
        },
        size: {
            type: Number
        },

    },
    {
        timestamps: {}
    }
)

const CompleteSchema = new Schema(
    {
        deck: DeckSchema
    },
    {
        trucks: TruckSchema
    },
    {
        wheels: WheelSchema
    },
    {
        bearings: BearingSchema
    },
    {
        gripTape: GripTapeSchema
    },
    {
        hardware: HardwareSchema
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
        myBoard: CompleteSchema
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