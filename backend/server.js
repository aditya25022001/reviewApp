import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import movieRoutes from './routes/movieRoutes.js'
import appRoutes from './routes/appRoutes.js'
import autoRoutes from './routes/autoRoutes.js'
import cafeRoutes from './routes/cafeRoutes.js'
import deviceRoutes from './routes/deviceRoutes.js'
import placeRoutes from './routes/placeRoutes.js'
import tubeRoutes from './routes/tubeRoutes.js'
import webRoutes from './routes/webRoutes.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'

dotenv.config()

connectDB()

const PORT  = process.env.PORT || 5000

const NODE_ENV = process.env.NODE_ENV

const app = express()

app.use(express.json())

app.use('/api/auth',authRoutes)

app.use('/api/profile',profileRoutes)

app.use('/api/movies',movieRoutes)

app.use('/api/apps',appRoutes)

app.use('/api/devices',deviceRoutes)

app.use('/api/automobiles',autoRoutes)

app.use('/api/cafes',cafeRoutes)

app.use('/api/places',placeRoutes)

app.use('/api/channels',tubeRoutes)

app.use('/api/websites',webRoutes)

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.use(notFound)

app.use(errorHandler)

app.listen(PORT,console.log(`Server running on port : ${PORT} in ${NODE_ENV} environment`))