import mongoose from 'mongoose'
const placeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    }, 
    description:{
        type:String,
        required:true
    },   
    location:{
        type:String,
        required:true
    },
    type:{
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

const Place = mongoose.model('Place',placeSchema)
export default Place