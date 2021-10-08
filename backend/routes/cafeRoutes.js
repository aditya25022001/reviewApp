import express from 'express'
import { getCafe } from '../controllers/cafeController.js'

const router = express.Router()

router.route('/').get(getCafe)

export default router