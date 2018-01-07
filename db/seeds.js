require('dotenv').config()
const User = require('./models/User')
const Complete = require('./models/Complete')
const Deck = require('./models/Deck')
const Trucks = require('./models/Trucks')
const Wheels = require('./models/Wheels')
const Bearings = require('./models/Bearings')
const GripTape = require('./models/Griptape')
const Hardware = require('./models/Hardware')
const mongoose = require('mongoose')

// connect to database
mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${error}
  `)
    process.exit(-1)
})

// Delete all users, then add some fake ones
User.remove({}).then(() => {

    const bobby = new User({
        name: 'Bob Murray',
        stance: 'goofy',
        photo: '',
    })
    const bobsCom = new Complete({
        name: 'bobsBoard',
    })
    const bobsDeck = new Deck({
        company: 'Real',
        size: 8.0,
        shape: 'mConcave'
    })
    

    const bobsTrucks = new Trucks({
        company: 'Royal',
        size: 139
    })
    

    const bobsWheels = new Wheels({
        company: 'Bones',
        size: 49
    })
    

    const bobsBearings = new Bearings({
        company: 'Boneswiss',
        abec: 7
    })
    

    const bobsGrip = new GripTape({
        company: 'MOB',
        grit: 800
    })
    

    const bobsHardware = new Hardware({
        company: 'Lucky',
        size: 1
    })
    bobsCom.theDeck.push(bobsDeck)
    bobsCom.theTrucks.push(bobsTrucks)
    bobsCom.theWheels.push(bobsWheels)
    bobsCom.theBearings.push(bobsBearings)
    bobsCom.theGripTape.push(bobsGrip)
    bobsCom.theHardware.push(bobsHardware)

    bobby.myBoard.push(bobsCom)



    // const bobby = new User({
    //     name: 'Bob Murray',
    //     stance: 'goofy',
    //     photo: '',
    //     complete: [{
    //         name: 'bobsBoard',
    //         deck: [{
    //             company: 'Real',
    //             size: 8.0,
    //             shape: 'mConcave'
    //         }],
    //         trucks: [{
    //             company: 'Royal',
    //             size: 139
    //         }],
    //         wheels: [{
    //             company: 'Bones',
    //             size: 49
    //         }],
    //         bearings: [{
    //             company: 'Boneswiss',
    //             abec: 7
    //         }],
    //         grip: [{
    //             company: 'MOB',
    //             grit: 800
    //         }],
    //         hardware: [{
    //             company: 'Lucky',
    //             size: 1
    //         }]

    //     }]
    // })

    return bobby.save()

}).catch((error) => {
    console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
    console.log(error)
}).then(() => {
    mongoose.connection.close()
    console.log(`
      Finished seeding database...
      
      Disconnected from MongoDB
    `)
})