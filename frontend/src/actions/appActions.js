import { GET_APPS_REQUEST, GET_APPS_SUCCESS, GET_APPS_FAIL } from '../constants/appConstants'
import axios from 'axios'

export const getAppsAction = () => async(dispatch) =>{
    try {
        dispatch({
            type: GET_APPS_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const { data } = await axios.get('/api/apps',config)
        dispatch({
            type: GET_APPS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:GET_APPS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}