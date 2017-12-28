//=========================================
//required
//=========================================
//express
const express = require('express')
const app = express()
// //body-parser
// const bodyParser = require('body-parser')
// app.use(bodyParser.urlencoded({extended:true}))
// //method-override
// const methodOverride = require('method-override')
// app.use(bodyParser.json())
// //hbs
// app.set('view engine','hbs')
// //public folder
// app.use(express.static(`${__dirname}/public`))
// //controllers
// const Controller = require('./controllers/returnController')
// app.use('/return',Controller)
app.get('/',(req,res)=>{
    res.send('Hello World')
})


//Port
const PORT = process.env.PORT || 3000
app.listen (PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
})
