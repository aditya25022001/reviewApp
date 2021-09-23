import mongoose from 'mongoose'

const deviceSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true,
    },
    launchDate:{
        type:Date,
        required:true
    },
    price:{
        type:Number,
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

const Device = mongoose.model('Device',deviceSchema)
export default Device