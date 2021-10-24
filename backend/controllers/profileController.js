import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

//route       GET/api/profile
//access      private
//desc        show user profile 
const getProfile = asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id)
    if(user){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            points: user.points,
            reviews: user.reviews,
            number: user.number,
            isAdmin:user.isAdmin,
            profilePic: user.profilePic,
        })
    }
    else{
        res.status(404).json({ message:"User not found" })
    }
})

//route       PUT/api/profile/update
//access      private
//desc        update user profile 
const updateUserProfile = asyncHandler(async (req,res) => {
    const { name, number, email } = req.body
    const id = req.user._id
    const user = await User.findById(id)
    if(user){
        user.name = name || user.name
        user.points = user.points
        user.reviews = user.reviews
        user.email = email || user.email
        user.number = number || user.number
        user.password = user.password
        user.isAdmin = user.isAdmin
        user.profilePic = user.profilePic
        const updatedUser = await user.save()
        res.json({
            _id:updatedUser._id,
            name: updatedUser.name, 
            email:updatedUser.email,
            number: updatedUser.number,
            points: updatedUser.points,
            reviews: updatedUser.reviews,
            isAdmin:updatedUser.isAdmin,
            profilePic:updatedUser.profilePic,
            token:generateToken(updatedUser._id),
        })
    }
    else{
        res.status(404).json({ message:"User not found" })
    }
})

export { getProfile, updateUserProfile }