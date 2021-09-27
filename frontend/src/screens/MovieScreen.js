import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesAction } from '../actions/movieActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'

export const MovieScreen = () => {
    
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    
    const userGetMovies = useSelector(state => state.userGetMovies)
    const { loading, error, movies } = userGetMovies

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getMoviesAction())
    },[dispatch])
    return (
        <div className='pt-5'>
         {loading && <Loader/>}
         {movies && movies.map(movie=>(
             <div>{movie.name}</div>
         ))}   
        </div>
    )
}
