import express from 'express'
import { getAutomobiles } from '../controllers/autoController.js'

const router = express.Router()

router.route('/').get(getAutomobiles)

export default router