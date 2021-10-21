import { GET_CAFES_REQUEST, GET_CAFES_SUCCESS, GET_CAFES_FAIL } from '../constants/cafeConstants'
import axios from 'axios'

export const getCafesAction = () => async(dispatch) =>{
    try {
        dispatch({
            type: GET_CAFES_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const { data } = await axios.get('/api/cafes',config)
        dispatch({
            type: GET_CAFES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:GET_CAFES_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}