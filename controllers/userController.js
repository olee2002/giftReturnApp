const express = require('express')
const router = express.Router({ mergeParams: true })
//require database
const User = require('../db/models/User')
//get index page 
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
//get new page
router.get('/new', (req, res) => {
    res.render('users/new'), { pageTitle: 'New User' }
})
//post input if no photo use bill murray
router.post('/', (req, res) => {
    const newUser = req.body
    if (!newUser.photoUrl) {
        newUser.photoUrl = 'http://www.fillmurray.com/g/300/300'
    }
    User.create(newUser)
        .then(() => {
            res.redirect('/users')
        })
        .catch((error) => {
            console.log(error)
        })
})
//Individual user page
router.get('/:userId', (req, res) => {
    const userId = req.params.userId
    User.findById(userId)
        .then((user) => {
            res.render('users/show', {
                user,
                pageTitle: user.username
            })
        })

        .catch((error) => {
            console.log(error)
        })

})
//edit route
router.get('/:userId/edit',(req,res)=>{
    const userId =req.params.userId
    User.findById(userId)
    .then((user)=>{
        res.render('users/edit',{
            user,
            pageTitle:'Profile_Update'
        })
        //req.flash("msg","Error Occurred")
    })
    .catch((error)=>{
        console.log(error)
    })
})
//put route
router.put('/:userId',(req,res)=>{
    const userId =req.params.userId
    const updatedUserInfo = req.body
    User.findByIdAndUpdate(userId, updatedUserInfo,{new:true})
    .then(()=>{
        res.redirect(`/users/${userId}`)
    })
})

//delete route

router.get('/:userId/delete',(req,res)=>{
   // req.flash('delete_msg', 'You are about to delete this page!');
    const userId=req.params.userId
    User.findByIdAndRemove(userId)
    .then(()=>{
        res.redirect(`/users`)
    })
})


module.exports = router