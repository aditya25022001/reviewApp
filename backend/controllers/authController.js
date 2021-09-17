import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import { welcomeEmail } from './emailController.js'

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

export { register, login }