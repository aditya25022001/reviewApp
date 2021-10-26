import express from 'express'
import { getCafe, addCafe } from '../controllers/cafeController.js'
import { authenticate } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').get(getCafe)

router.route('/addcafe').post(authenticate,addCafe)

export default router