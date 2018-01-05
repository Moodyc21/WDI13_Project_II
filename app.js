require('dotenv').config()

const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const methodOverride = require("method-override")
const hbs = require("hbs")


const index = require('./routes/index')
const usersController = require('./routes/usersController')
const deckController = require('./routes/deckController')

const app = express()


// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride("_method"))

app.use('/', index)
app.use('/users', usersController)
app.use('/decks', deckController)


//connect MongoDB
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
}
else {
  mongoose.connect('mongodb://localhost/completeBoard')
}
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err)
  process.exit(-1)
  }
)
mongoose.connection.once('open', function() {
  console.log("Mongoose has connected to MongoDB!")
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
