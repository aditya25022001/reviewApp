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

//route       POST/api/apps/addapp
//access      private
//desc        add app in the database
const addApp = asyncHandler(async (req,res) => {
    const { name, description, logo, launch, category, size } = req.body
    const appExists = await Application.findOne({ name:new RegExp(name, 'i') })
    if(!appExists) {
        const app = await Application.create({
            name, description, logo, launch, size, category, reviews:[], reviewsBy:[] })
        if(app){
            res.status(201).json({
                message:"App added successfully",
                ...app
            })
        }
    }
    else{
        res.status(400).json({
            message:"App already exists"
        })
    }
})

export { getApps, addApp }