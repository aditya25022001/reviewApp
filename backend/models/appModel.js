import mongoose from 'mongoose'

const appSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
    },
    launch:{
        type:Date,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    size:{
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

const Application = mongoose.model('Application',appSchema)
export default Application