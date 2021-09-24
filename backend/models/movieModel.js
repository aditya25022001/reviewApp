import mongoose from 'mongoose'

const movieSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    image:{
        type:String,
        required:true
    },
    genre:[{
        type:String,
        required:true,
    }],
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
        type:String,
        required:true
    },
    reviews:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'Review'
    }],
    reviewsBy:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User'
    }]
},{
    timestamps:true
})

const Movie = mongoose.model('Movie',movieSchema)
export default Movie