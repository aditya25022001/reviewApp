import User from './models/userModel.js'
import Application from './models/appModel.js'
import Automobile from './models/autoModel.js'
import Cafe from './models/cafeModel.js'
import Device from './models/deviceModel.js'
import Movie from './models/movieModel.js'
import Place from './models/placeModel.js'
import Youtube from './models/tubeModel.js'
import Website from './models/webModel.js'
import dotenv from 'dotenv'
import users from './data/users.js'
import applications from './data/applications.js'
import automobiles from './data/automobile.js'
import cafes from './data/cafes.js'
import devices from './data/devices.js'
import movies from './data/movies.js'
import places from './data/places.js'
import websites from './data/websites.js'
import youtube from './data/youtube.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async() => {
    try {
        await User.deleteMany()
        await Application.deleteMany()
        await Automobile.deleteMany()
        await Cafe.deleteMany()
        await Device.deleteMany()
        await Movie.deleteMany()
        await Place.deleteMany()
        await Youtube.deleteMany()
        await Website.deleteMany()
        await User.insertMany(users)
        await Application.insertMany(applications)
        await Automobile.insertMany(automobiles)
        await Cafe.insertMany(cafes)
        await Device.insertMany(devices)
        await Movie.insertMany(movies)
        await Place.insertMany(places)
        await Youtube.insertMany(youtube)
        await Website.insertMany(websites)
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
        await Application.deleteMany()
        await Automobile.deleteMany()
        await Cafe.deleteMany()
        await Device.deleteMany()
        await Movie.deleteMany()
        await Place.deleteMany()
        await Youtube.deleteMany()
        await Website.deleteMany()
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