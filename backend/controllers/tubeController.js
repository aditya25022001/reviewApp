import asyncHandler from 'express-async-handler'
import YouTube from '../models/tubeModel.js'

//route       GET/api/tubes
//access      public
//desc        get all youtube channels in the database
const getChannels = asyncHandler(async (req,res) => {
    const channels = await YouTube.find({})
    res.status(200).json({
        channels:channels
    })
})

export { getChannels }