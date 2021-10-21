import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesAction } from '../actions/movieActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { Movie } from '../components/Movie'

export const MovieScreen = () => {
    
    // const userLogin = useSelector(state => state.userLogin)
    // const { userInfo } = userLogin
    
    const userGetMovies = useSelector(state => state.userGetMovies)
    const { loading, error, movies } = userGetMovies

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getMoviesAction())
    },[dispatch])
    return (
        <div className='pt-5 mt-4'>
         {loading 
         ? <Loader/>
         : error 
         ? <Message message={error} variant='error'/>
         : movies && movies.map(movie=>(
             <Movie key={movie._id} name={movie.name} image={movie.image} genre={movie.genre} description={movie.description} cast={movie.cast} availableOn={movie.availableOn} releaseDate={movie.releaseDate} />
         ))}   
        </div>
    )
}
