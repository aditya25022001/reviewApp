import User from './models/userModel.js'
import dotenv from 'dotenv'
import users from './data/users.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async() => {
    try {
        await User.deleteMany()
        await User.insertMany(users)
        console.log("Data Added!")
        process.exit(0)
    } catch (error) {
        console.log(`Error: ${error.message}`)        
        process.exit(1)
    }
}

const destroyData = async() => {
    try {
        await User.deleteMany()
        console.log('Data Deleted!')
        process.exit(0)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

if(process.argv[2]==='-d'){
    destroyData()
}
else{
    importData()
}