require('dotenv').config()
const User = require('./models/User')
const SkateShop = require('./models/SkateShop')
const Complete = require('./models/Complete')
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
    const bastien = new User({
        name: 'Bastien Salabanzi',
        nickName: 'Twinkle Toes',
        stance: 'Goofy',
        photoUrl: 'https://i.imgur.com/WSOJyR1.jpg'
    })

    const primitive = new SkateShop({
        name: 'Primitive SkateShop',
        location: 'Encino, CA'
    })
    const bastienBoard = new Complete({
        name: 'Bastiens Board',
        deck: 'Primitive',
        trucks: 'Theeve',
        wheels: 'Type-s',
        bearings: 'BoneSwiss',
        gripTape: 'Soulijah',
        hardware: 'Independent',
    })
    primitive.myComplete.push(bastienBoard)

    bastien.shops.push(primitive)

    return bastien.save()

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
