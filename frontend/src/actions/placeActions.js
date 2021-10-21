import { GET_PLACES_REQUEST, GET_PLACES_SUCCESS, GET_PLACES_FAIL } from '../constants/placeConstants'
import axios from 'axios'

export const getPlacesAction = () => async(dispatch) =>{
    try {
        dispatch({
            type: GET_PLACES_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const { data } = await axios.get('/api/places',config)
        dispatch({
            type: GET_PLACES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:GET_PLACES_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}