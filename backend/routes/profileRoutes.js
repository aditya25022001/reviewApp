import express from 'express'
import { getProfile, updateUserProfile } from '../controllers/profileController.js'
import { authenticate } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').get(authenticate, getProfile)
router.route('/update').put(authenticate, updateUserProfile)

export default router