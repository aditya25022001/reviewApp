import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    entity:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
    },
    stars:{
        type:Number,
        required:true,
    },
    comment:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const Reviews = mongoose.model('Review', reviewSchema)

export default Reviews