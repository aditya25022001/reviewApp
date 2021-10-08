import express from 'express'
import { getPlaces } from '../controllers/placeController.js'

const router = express.Router()

router.route('/').get(getPlaces)

export default router