import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import generateHash from '../utils/generateToken.js'
import User from '../models/userModel.js'
import { v4 } from 'uuid'
import { welcomeEmail, sendOtpEmail } from './emailController.js'

//route       POST/api/auth/register
//access      public
//desc        signing up users 
const register = asyncHandler(async (req,res) => {
    const { name, email, number, password } = req.body
    const userExists = await User.findOne({ email })
    if(userExists) {
        res.status(400).json({ message:"This email is already used!" })
    }
    const user = await User.create({
        name, email, password, number, points:0, reviews:[]
    })
    if(user){
        welcomeEmail(name, email)
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            number:user.number,
            points:user.points,
            reviews:user.reviews,
            token: generateToken(user._id),
        })
    }
    else{
        res.status(400).json({ message:"Invalid user data" })
    }
})

//route       POST/api/auth/login
//access      public
//desc        signing in users
const login = asyncHandler(async(req,res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if(!user){
        res.status(404).json({ message:"Bad Credentials" })
    }
    else{
        if(user && (await user.matchPassword(password))){
            res.json({
                _id: user._id,
                name:user.name,
                email:user.email,
                points:user.points,
                reviews:user.reviews,
                token: generateToken(user._id)
            })
        }
        else{
            res.status(401).json({ message:"Bad Credentials" })
        }
    }
})

//route       POST/api/auth/sendOtp
//access      public
//desc        sending users the otp for retriving password
const sendOtp = asyncHandler(async (req,res) => {
    const { email } = req.body
    const user = await User.findOne({ email })
    if(user){
        const otp = v4().slice(0,8)
        sendOtpEmail(user.name, email, otp)
        res.status(200).json({
            _id: user._id,
            otp:generateHash(otp),
            email: user.email,
        })
    }
    else{
        res.status(404).json({ message:"User not found" })
    }
})

//route       PUT/api/auth/sendOtp
//access      public
//desc        reseting password for user
const resetPassword = asyncHandler(async (req,res) => {
    const { password, id } = req.body
    const user = await User.findById(id)
    if(user){
        user.name = user.name
        user.points = user.points
        user.reviews = user.reviews
        user.email = user.email
        user.number = user.number
        user.password = password
        const updatedUser = await user.save()
        res.json({
            _id:updatedUser._id,
            email: updatedUser.email,
        })
    }
    else{
        res.status(404).json({ message:"User not found" })
    }
})

export { register, login, sendOtp, resetPassword }