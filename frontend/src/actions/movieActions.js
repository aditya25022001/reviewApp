import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_FAIL } from '../constants/movieConstants'
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