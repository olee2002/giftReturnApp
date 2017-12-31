const express = require('express')
const router = express.Router({ mergeParams: true })
//require database
const User = require('../db/models/User')
const Store = require('../db/models/Store')
const Gift = require('../db/models/Gift')


router.get('/new', (req, res) => {
    const userId = req.params.userId
    const storeId = req.params.storeId

    User.findById(userId)
        .then((user) => {
            const store = user.stores.storeId
            res.render('gifts/new', {
                userId,
                store,
                pageTitle: 'New_Gift'
            })
        })
})

router.post('/',(req,res)=>{
    const userId = req.params.userId
    const storeId = req.params.storeId

    const newGift = req.body

    User.findById(userId)
    .then((user)=>{
        const store = user.stores.storeId
        store.giftToReturn.push(newGift)

        return user.save()
    })
    .then(()=>{
        res.redirect(`/users/${userId}/stores/${storeId}`)
        
    })
})




module.exports = router