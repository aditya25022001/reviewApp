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

export { getPlaces }