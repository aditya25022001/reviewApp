import asyncHandler from 'express-async-handler'
import Cafe from '../models/cafeModel.js'

//route       GET/api/cafes
//access      public
//desc        get all cafes in the database
const getCafe = asyncHandler(async (req,res) => {
    const cafe = await Cafe.find({})
    res.status(200).json({
        cafes:cafe
    })
})

//route       POST/api/cafes/addcafe
//access      private
//desc        add cafe in the database
const addCafe = asyncHandler(async (req,res) => {
    const { name, phone, image, description, location, established } = req.body
    const cafeExists = await Cafe.findOne({ name:new RegExp(name, 'i')})
    if(!cafeExists){
        const cafe = await Cafe.create({
            name, phone, image, description, location, established, reviews:[], reviewsBy:[]
        })
        if(cafe){
            res.status(201).json({
                message:"Cafe added successfully",
                ...cafe
            })
        }
    }
    else{
        res.status(400).json({
            message:"Cafe already exists"
        })
    }
})

export { getCafe, addCafe }