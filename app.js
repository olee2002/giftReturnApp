//=========================================
//required
//=========================================
//express 
const express = require('express')
const app = express()
//mongoose
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/gift-returns', {
    useMongoClient: true
})
mongoose.connection.once('open', () => {
    console.log('Mongoose has connected to MongoDB!')
})
mongoose.connection.on('error', (error) => {
    console.error(`MongoDB connection error!! ${error}`)
    process.exit(-1)
})
//body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
//method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
//hbs
app.set('view engine', 'hbs')
//public folder
app.use(express.static(`${__dirname}/public`))
//controllers
const Controller = require('./controllers/userController')
app.use('/users', Controller)
//test PORT setup
app.get('/', (req, res) => {
    res.send('Hello World')
})


//Port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})
