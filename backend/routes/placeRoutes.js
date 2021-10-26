import express from 'express'
import { getPlaces, addPlace } from '../controllers/placeController.js'
import { authenticate } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').get(getPlaces)

router.route('/addplace').post(authenticate, addPlace)

export default router