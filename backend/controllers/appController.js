import asyncHandler from 'express-async-handler'
import Application from '../models/appModel.js'

//route       GET/api/apps
//access      public
//desc        get all apps in the database
const getApps = asyncHandler(async (req,res) => {
    const apps = await Application.find({})
    res.status(200).json({
        apps:apps
    })
})

export { getApps }