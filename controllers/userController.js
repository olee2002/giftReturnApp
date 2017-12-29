const express = require('express')
const router = express.Router({ mergeParams: true })
//require database
const User = require('../db/models/User')

router.get('/', (req, res) => {
    User.find({})
        .then((users) => {
            res.render('users/index', {
                users,
                pageTitle: 'Home'
            })
        })
        .catch((error) => {
            console.log(error)
        })
})
















module.exports = router