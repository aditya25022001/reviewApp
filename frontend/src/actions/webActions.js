import { GET_WEBSITES_REQUEST, GET_WEBSITES_SUCCESS, GET_WEBSITES_FAIL } from '../constants/webConstants'
import axios from 'axios'

export const getWebsitesAction = () => async(dispatch) =>{
    try {
        dispatch({
            type: GET_WEBSITES_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const { data } = await axios.get('/api/websites',config)
        dispatch({
            type: GET_WEBSITES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:GET_WEBSITES_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}