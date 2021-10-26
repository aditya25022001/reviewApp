import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_FAIL, ADD_MOVIE_FAIL, ADD_MOVIE_SUCCESS, ADD_MOVIE_RESET, ADD_MOVIE_REQUEST } from '../constants/movieConstants'
import axios from 'axios'

export const getMoviesAction = () => async(dispatch) =>{
    try {
        dispatch({
            type: GET_MOVIES_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const { data } = await axios.get('/api/movies',config)
        dispatch({
            type: GET_MOVIES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:GET_MOVIES_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const addMovieAction = (name, image, description, genre, cast, releaseDate, availableOn) => async(dispatch, getState) => {
    try {
        dispatch({
            type:ADD_MOVIE_REQUEST
        })
        const { userLogin : { userInfo } } = getState()
        const config = {
            headers:{
                'Content-type':'application/json',
                'Authorization':`Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post('/api/movies/addmovie',{ name, image, description, genre, cast, releaseDate, availableOn},config)
        dispatch({
            type:ADD_MOVIE_SUCCESS,
            payload:data
        })
        setTimeout(()=>{
            dispatch({ type:ADD_MOVIE_RESET })
        },3000)
    } catch (error) {
        dispatch({
            type:ADD_MOVIE_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}