import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import profileRoutes from './routes/profileRoutes.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'

dotenv.config()

connectDB()

const PORT  = process.env.PORT || 5000

const NODE_ENV = process.env.NODE_ENV

const app = express()

app.use(express.json())

app.use('/api/auth',authRoutes)

app.use('/api/profile',profileRoutes)

app.get('/',(req,res) => {
    res.send('Hello World')
})

app.use(notFound)

app.use(errorHandler)

app.listen(PORT,console.log(`Server running on port : ${PORT} in ${NODE_ENV} environment`))