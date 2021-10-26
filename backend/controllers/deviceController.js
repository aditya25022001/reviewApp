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

//route       POST/api/devices/adddevice
//access      private
//desc        add device in the database
const addDevice = asyncHandler(async (req,res) => {
    const { name, description, image, company, launchDate, price } = req.body
    const deviceExists = await Device.findOne({ name:new RegExp(name,'i') })
    if(!deviceExists){
        const device = await Device.create({
            name, image, description, launchDate, price, company, reviews:[], reviewsBy:[]
        })
        if(device){
            res.status(201).json({
                message:"Device added successfully",
                ...device
            })
        }
    }
    else{
        res.status(400).json({
            message:"Device already exists"
        })
    }
})

export { getDevices, addDevice }