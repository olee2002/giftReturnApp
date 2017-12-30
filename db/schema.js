const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const GiftSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
        price: {
            type: Number
        },
        cameFrom: {
            type: String
        }

    },
    {usePushEach: true}
)

const StoreSchema = new Schema(
    {
        name: {
            type: String,
            required:true
        },
        address: {
            type: String
        },
        giftstoReturn: [GiftSchema]
    },
    
    {usePushEach: true}
)

const UserSchema = new Schema(
    {
        username:{
            type:String,
            required: true
        },
        email: {
            type:String
        },
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true
        },
        photoUrl:{
            type: String,
            default: 'http://www.fillmurray.com/300/300'
        },
        
    },
    {usePushEach: true}

)

module.exports = {
    UserSchema,
    StoreSchema,
    GiftSchema
}