const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise


const GiftSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description:String,
        price: Number,
        cameFrom: String

    },{usePushEach: true}
)


const StoreSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: String,
        giftsToReturn: [GiftSchema]
    }, { usePushEach: true }
)

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: String,
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        photoUrl: {
            type: String,
            default: 'http://www.fillmurray.com/300/300'
        },
        stores: [StoreSchema]

    }, { usePushEach: true }

)

module.exports = {
    UserSchema,
    StoreSchema,
    GiftSchema
}