import mongoose from 'mongoose'
const ytSchema = mongoose.Schema({
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
    url:{
        type:String,
        required:true,
    },
    subscribers:{
        type:String,
        required:true
    },
    category:{
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

const Youtube = mongoose.model('Youtube',ytSchema)
export default Youtube