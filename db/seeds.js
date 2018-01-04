require('dotenv').config()
const User = require('./models/User')
const Complete = require('./models/Complete')
const Deck = require('./models/Deck')
const mongoose = require('mongoose')

// connect to database
mongoose.connect(process.env.MONGODB_URI, {
  useMongoClient: true
})

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
  })

  const completeBoard = new Complete({

  })
  const realDeck = new Deck({
    company: 'Real Skateboards',
    size: '8',
    shape: 'medium concave'
  })
  completeBoard.decks.push(realDeck)

  bobby.myBoard.push(completeBoard)

  return bobby.save()
}).then(() => {
  return User.create({
    name: 'Brian Kubis',
    stance: 'regular',
  })
}).then((gob) => {
  const completeBoard = new Complete({
    
  })

  gob.myBoard.push(completeBoard)

  return gob.save()
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