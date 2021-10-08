import express from 'express'
import { getDevices } from '../controllers/deviceController.js'

const router = express.Router()

router.route('/').get(getDevices)

export default router