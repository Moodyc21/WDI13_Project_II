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
        timestamps: {},
        
    }
)

const TrucksSchema = new Schema(
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
        timestamps: {},
        
    }
)

const WheelsSchema = new Schema(
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
        timestamps: {},
        
    }
)

const BearingsSchema = new Schema(
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
        timestamps: {},
        
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
        timestamps: {},
       
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
        timestamps: {},
        
    }
)

const CompleteSchema = new Schema(
    {
        name: String
    },
    {
        theDeck: [DeckSchema]
    },
    {
        theTrucks: [TrucksSchema]
    },
    {
        theWheels: [WheelsSchema]
    },
    {
        theBearings: [BearingsSchema]
    },
    {
        theGripTape: [GripTapeSchema]
    },
    {
        theHardware: [HardwareSchema]
    },


    {
        timestamps: {},
        
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
        photo: {
            type: String,
            default: 'https://i.imgur.com/3ggmLxE.jpg'
        },
        myBoard: [CompleteSchema]
    },
    {
        timestamps: {},
        usePushEach: true
    }
)

// const UserSchema = new Schema({
//     name: {
//         type: String,
//         required: [true, 'Name is required!']
//     },
//     stance: {
//         type: String,
//         required: [true, 'Stance is required!']
//     },
//     photo: {
//         type: String
//     },
//     complete: [{
//         name: {
//             type: String
//         },
//         deck: [{
//             company: {
//                 type: String
//             },
//             size: {
//                 type: Number
//             },
//             shape: {
//                 type: String
//             }
//         }],
//         trucks: [{
//             company: {
//                 type: String
//             },
//             size: {
//                 type: Number
//             }
//         }],
//         wheels: [{
//             company: {
//                 type: String
//             },
//             size: {
//                 type: Number
//             }
//         }],
//         bearings: [{
//             company: {
//                 type: String
//             },
//             abec: {
//                 type: Number
//             }
//         }],
//         gripTape: [{
//             company: {
//                 type: String
//             },
//             grit: {
//                 type: Number
//             }
//         }],
//         hardware: [{
//             company: {
//                 type: String
//             },
//             size: {
//                 type: Number
//             }
//         }]


//     }]
// },
//     {
//         timestamps: {},
//         usePushEach: true
//     }
// )

module.exports = {
    DeckSchema,
    TrucksSchema,
    WheelsSchema,
    BearingsSchema,
    GripTapeSchema,
    HardwareSchema,
    CompleteSchema,
    UserSchema
}