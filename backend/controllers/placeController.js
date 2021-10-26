import asyncHandler from 'express-async-handler'
import Place from '../models/placeModel.js'

//route       GET/api/places
//access      public
//desc        get all places in the database
const getPlaces = asyncHandler(async (req,res) => {
    const places = await Place.find({})
    res.status(200).json({
        places:places
    })
})

//route       POST/api/places/addplace
//access      private
//desc        add place in the database
const addPlace = asyncHandler(async (req,res) => {
    const { name, image, description, location, type } = req.body
    const placeExists = await Place.findOne({ name:new RegExp(name,'i') })
    if(!placeExists){
        const place = await Place.create({
            name, description, location, type, image, reviews:[], reviewsBy:[]
        })
        if(place){
            res.status(201).json({
                message:"Place added successfully",
                ...place
            })
        }
    }
    else{
        res.status(400).json({
            message: 'Place already exists'
        })
    }
})

export { getPlaces, addPlace }