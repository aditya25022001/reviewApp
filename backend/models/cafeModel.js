import mongoose from 'mongoose'

const cafeSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:false
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    established:{
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

const Cafe = mongoose.model('Cafe',cafeSchema)
export default Cafe