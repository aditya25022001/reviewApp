import { GET_DEVICES_REQUEST, GET_DEVICES_SUCCESS, GET_DEVICES_FAIL } from '../constants/deviceConstants'
import axios from 'axios'

export const getDevicesAction = () => async(dispatch) =>{
    try {
        dispatch({
            type: GET_DEVICES_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const { data } = await axios.get('/api/devices',config)
        dispatch({
            type: GET_DEVICES_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:GET_DEVICES_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}