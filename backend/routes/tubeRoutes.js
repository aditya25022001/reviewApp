import express from 'express'
import { getChannels } from '../controllers/tubeController.js'

const router = express.Router()

router.route('/').get(getChannels)

export default router