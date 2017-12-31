const express = require('express')
const router = express.Router({ mergeParams: true })
//require database
const User = require('../db/models/User')
const Store = require('../db/models/Store')
//store index page
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
//add a new store page
router.get('/new', (req, res) => {
    const userId = req.params.userId

    res.render('stores/new', {
        userId,
        pageTitle: 'New_Store'
    })

})

//post new store page
router.post('/', (req, res) => {

    const userId = req.params.userId
    // const newStore = new Store({
    //     name: req.body.name,
    //     address: req.body.address

    // })

    User.findById(userId)
        .then((user) => {
            user.stores.push(req.body)

            // if (Array.isArray(user.stores)) {
            //     user.stores.push(req.body);
            // } else {
            //     user.stores = [req.body];

            // }
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${userId}/stores`)
        })
        .catch((error) => {
            console.log(error)
        })
})

//show created store page
router.get('/:storeId', (req, res) => {
    const userId = req.params.userId
    const storeId = req.params.storeId

    User.findById(userId)
        .then((user) => {
            console.log(user.stores)
            const store = user.stores.storeId
            res.render('stores/show', {
                userId,
                store,
                pageTitle: 'Store'
            })
        })
        .catch((error) => {
            console.log(error)
        })
})








module.exports = router