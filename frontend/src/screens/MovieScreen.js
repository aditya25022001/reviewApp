import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesAction } from '../actions/movieActions'
import { Loader } from '../components/Loader'
import { Message } from '../components/Message'
import { Movie } from '../components/Movie'
import { Entity } from '../components/Entity'
import AddIcon from '@material-ui/icons/Add';

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
        <div className='pt-5 mt-4' style={{ display:'flex', flexWrap:'wrap' }}>
         {loading 
         ? <Loader/>
         : error 
         ? <Message message={error} variant='error'/>
         : movies && movies.map((movie,index)=>(
             <Movie key={index} name={movie.name} image={movie.image} genre={movie.genre} description={movie.description} cast={movie.cast} availableOn={movie.availableOn} releaseDate={movie.releaseDate} />
         ))}
         <Entity name="Add Movie" disabled={!userInfo || (userInfo && !userInfo.isAdmin)} image={<AddIcon/>} to="/addmovie" />   
        </div>
    )
}
