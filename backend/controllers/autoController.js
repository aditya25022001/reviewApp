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

export { getAutomobiles }