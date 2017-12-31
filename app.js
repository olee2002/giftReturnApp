
//required
//=========================================
//express 
const express = require('express')
const app = express()
//mongoose
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/gift-returns-olee', {
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
//cookie-parser
const cookieParser = require('cookie-parser')
app.use(cookieParser())
//connect-flash
const flash = require('connect-flash')
app.use(flash())
//public folder
app.use(express.static(`${__dirname}/public`))
//controllers
const userController = require('./controllers/userController')
app.use('/users', userController)
const storesController = require('./controllers/storesController')
app.use('/users/:userId/stores', storesController)
const giftsController = require('./controllers/giftsController')
app.use('/users/:userId/stores/:storeId/gifts', giftsController)
//Redirect the main port to user page.
app.get('/', (req, res) => {
    res.redirect('/users')
})


//Port
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})


