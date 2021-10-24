import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const uploadProfilePic = asyncHandler(async(req,res)=>{
    const fileName = req.file.filename
    const user = await User.findById(req.user._id)
    if(user){
        user.name = user.name
        user.points = user.points
        user.reviews = user.reviews
        user.email = user.email
        user.number = user.number
        user.password = user.password
        user.isAdmin = user.isAdmin
        user.profilePic = fileName
        const updatedUser = await user.save()
        res.status(200).json({
            message:"Uploaded Successfully",
            filename : req.file.filename,
            _id:updatedUser._id
        })
    }
    else{
        res.status(500).json({
            message:"Error while uploading"
        })
    }
})

export { uploadProfilePic }