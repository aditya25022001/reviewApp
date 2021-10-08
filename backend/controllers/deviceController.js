import asyncHandler from 'express-async-handler'
import Device from '../models/deviceModel.js'

//route       GET/api/devices
//access      public
//desc        get all devices in the database
const getDevices = asyncHandler(async (req,res) => {
    const devices = await Device.find({})
    res.status(200).json({
        devices:devices
    })
})

export { getDevices }