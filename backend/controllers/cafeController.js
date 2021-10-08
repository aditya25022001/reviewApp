import asyncHandler from 'express-async-handler'
import Cafe from '../models/cafeModel.js'

//route       GET/api/cafes
//access      public
//desc        get all cafes in the database
const getCafe = asyncHandler(async (req,res) => {
    const cafe = await Cafe.find({})
    res.status(200).json({
        cafe:cafe
    })
})

export { getCafe }