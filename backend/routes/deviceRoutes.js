import express from 'express'
import { getDevices, addDevice } from '../controllers/deviceController.js'
import { authenticate } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/').get(getDevices)

router.route('/adddevice').post(authenticate,addDevice)

export default router