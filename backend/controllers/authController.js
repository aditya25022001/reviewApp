import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
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

export { register }