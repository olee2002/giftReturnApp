const express = require('express')
const router = express.Router({ mergeParams: true })
//require database
const User = require('../db/models/User')

router.get('/', (req, res) => {
    const userId = req.params.userId
    User.findById(userId)
        .then((user) => {
            res.render('stores/index', {
                userFullName: `${user.firstName}${user.lastName}`,
                userId: user._id,
                stores: user.stores,
                pageTitle: 'Stores'
            })
        })
        .catch((error) => {
            console.log(error)
        })
})
router.get('/new', (req, res) => {
    const userId = req.params.userId
    res.render('stores/new', {
        userId,
        pageTitle: 'New_Store'
    })

})








module.exports = router