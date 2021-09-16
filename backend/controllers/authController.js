import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const register = asyncHandler(async (req,res) => {
    const { name, email, number, password } = req.body
    const userExists = await User.findOne({ email })
    if(userExists) {
        res.status(400).json({ message:"This email is already used, signin instead!" })
    }
    const user = await User.create({
        name, email, password, number, points:0, reviews:[]
    })
    if(user){
        res.status(201).json({ message:"User created" })
    }
})

export { register }