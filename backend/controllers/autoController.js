import asyncHandler from 'express-async-handler'
import Automobile from '../models/autoModel.js'

//route       GET/api/automobiles
//access      public
//desc        get all automobiles in the database
const getAutomobiles = asyncHandler(async (req,res) => {
    const automobiles = await Automobile.find({})
    res.status(200).json({
        automobiles:automobiles
    })
})

//route       POST/api/automobiles/addautomobile
//access      private
//desc        add automobile in the database
const addAutomobile = asyncHandler(async (req,res) => {
    const { name, image, description, price, company } = req.body
    const autoExists = await Automobile.findOne({ name:new RegExp(name, 'i') })
    if(!autoExists){
        const auto = await Automobile.create({
            name, image, description, price, company, reviews:[], reviewsBy:[]
        })
        if(auto){
            res.status(201).json({
                message:"Automobile added successfully",
                ...auto
            })
        }
    }
    else{
        res.status(400).json({
            message:"Automobile already exists"
        })
    }
})

export { getAutomobiles, addAutomobile }