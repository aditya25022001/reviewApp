import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log(`MongoDB connected to : ${connection.connection.host}`)
    } catch (error) {
        console.log(`Error in connecting to databse : ${error.message}`)
        process.exit(1)
    }
}

export default connectDB