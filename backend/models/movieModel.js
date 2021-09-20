import mongoose from 'mongoose'

const movieSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    genre:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    cast:[{
        type:String,
        required:true
    }],
    availableOn:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
        required:true
    },
    addedToDb:{
        type:Date,
        required:true,
        default:Date.now()
    },
    reviews:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Review'
    }],
    reviewsBy:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    }],
    avgRating:{
        type:Number,
        required:true,
        default:0
    }
})

const Movie = mongoose.model('Movie',movieSchema)
export default Movie