import express from 'express'
import { getApps, addApp } from '../controllers/appController.js'
import { authenticate } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').get(getApps)

router.route('/addapp').post(authenticate, addApp)

export default router