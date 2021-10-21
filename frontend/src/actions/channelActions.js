import { GET_CHANNELS_REQUEST, GET_CHANNELS_SUCCESS, GET_CHANNELS_FAIL } from '../constants/channelConstants'
import axios from 'axios'

export const getChannelsAction = () => async(dispatch) =>{
    try {
        dispatch({
            type: GET_CHANNELS_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const { data } = await axios.get('/api/channels',config)
        dispatch({
            type: GET_CHANNELS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:GET_CHANNELS_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}