import express from 'express'
import { getAutomobiles, addAutomobile } from '../controllers/autoController.js'
import { authenticate } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').get(getAutomobiles)

router.route('/addautomobile').post(authenticate, addAutomobile)

export default router