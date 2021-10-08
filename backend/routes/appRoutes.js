import express from 'express'
import { getApps } from '../controllers/appController.js'

const router = express.Router()

router.route('/').get(getApps)

export default router