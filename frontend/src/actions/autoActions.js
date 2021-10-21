import { GET_AUTOMOBILES_REQUEST, GET_AUTOMOBILES_SUCCESS, GET_AUTOMOBILES_FAIL } from '../constants/autoConstants'
import axios from 'axios'

export const getAutomobilesAction = () => async(dispatch) =>{
    try {
        dispatch({
            type: GET_AUTOMOBILES_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const { data } = await axios.get('/api/automobiles',config)
        dispatch({
            type: GET_AUTOMOBILES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:GET_AUTOMOBILES_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}