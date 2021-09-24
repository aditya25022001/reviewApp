import mongoose from 'mongoose'
const webSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    image:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    launched:{
        type:String,
        required:false
    },
    url:{
        type:String,
        required:true,
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

const Website = mongoose.model('Website',webSchema)
export default Website