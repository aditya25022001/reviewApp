import express from 'express'
import { getProfile, updateUserProfile } from '../controllers/profileController.js'

const router = express.Router()

router.route('/').get(getProfile)
router.route('/update').put(updateUserProfile)

export default router