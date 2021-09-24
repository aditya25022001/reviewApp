import mongoose from 'mongoose'

const autoSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    image:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required:true
    },
    price:{
        type:String,
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