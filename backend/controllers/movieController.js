import asyncHandler from 'express-async-handler'
import Movie from '../models/movieModel.js'

//route       GET/api/movies
//access      public
//desc        get all movies in the database
const getMovies = asyncHandler(async (req,res) => {
    const movies = await Movie.find({})
    res.status(200).json({
        movies:movies
    })
})

export { getMovies }