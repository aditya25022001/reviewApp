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

//route       POST/api/movies/addmovie
//access      private
//desc        add movie in the database
const addMovie = asyncHandler(async (req,res) => {
    const { name, image, description, genre, cast, releaseDate, availableOn } = req.body
    const movieExists = await Movie.findOne({ name:new RegExp(name,'i') })
    if(!movieExists) {
        const movie = await Movie.create({
            name, image, genre, description, releaseDate, availableOn, cast, reviews:[], reviewsBy:[]
        })
        if(movie){
            res.status(201).json({
                message:"Movie added successfully",
                ...movie
            })
        }
    }
    else{
        res.status(400).json({
            message:"Movie already exists"
        })
    }

})

export { getMovies, addMovie }