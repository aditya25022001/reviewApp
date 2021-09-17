import express from 'express'
import { register, login, sendOtp, resetPassword } from '../controllers/authController.js'

const router  = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/sendOtp').post(sendOtp)
router.route('/reset/:id').put(resetPassword)

export default router