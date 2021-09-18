import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'

//route       GET/api/user/profile
//access      private
//desc        show user profile 
const getProfile = asyncHandler(async (req,res) => {
    const id = req.params.id
    const user = await User.findById(id)
    if(user){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email:user.email,
            points: user.points,
            reviews: user.reviews,
            number: user.number
        })
    }
    else{
        res.status(404).json({ message:"User not found" })
    }
})

//route       PUT/api/user/profile/update
//access      private
//desc        update user profile 
const updateUserProfile = asyncHandler(async (req,res) => {

})

export { getProfile, updateUserProfile }