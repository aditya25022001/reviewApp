import express from 'express'
import { getWebsites } from '../controllers/webController.js'

const router = express.Router()

router.route('/').get(getWebsites)

export default router