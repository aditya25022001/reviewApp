import express from 'express'
import { getMovies, addMovie } from '../controllers/movieController.js'
import { authenticate } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').get(getMovies)

router.route('/addmovie').post(authenticate,addMovie)

export default router