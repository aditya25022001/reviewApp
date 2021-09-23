import mongoose from 'mongoose'

const autoSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    launch:{
        type:Date,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    company:{
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

const Automobile = mongoose.model('Automobile',autoSchema)
export default Automobile