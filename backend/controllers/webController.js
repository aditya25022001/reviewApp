import asyncHandler from 'express-async-handler'
import Website from '../models/webModel.js'

//route       GET/api/websites
//access      public
//desc        get all websites in the database
const getWebsites = asyncHandler(async (req,res) => {
    const websites = await Website.find({})
    res.status(200).json({
        websites:websites
    })
})

export { getWebsites }