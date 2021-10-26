import { VIEW_PROFILE_REQUEST, VIEW_PROFILE_SUCCESS, VIEW_PROFILE_FAIL, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_RESET } from "../constants/profileConstants";
import axios from 'axios'

export const getProfileAction = () => async(dispatch, getState) => {
    try {
        dispatch({
            type:VIEW_PROFILE_REQUEST
        })
        const { userLogin : { userInfo } } = getState()
        const config = {
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.get('/api/profile',config)
        dispatch({
            type:VIEW_PROFILE_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:VIEW_PROFILE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const updateUserProfileAction = (user) => async(dispatch, getState) => {
    try {
        dispatch({
            type:UPDATE_PROFILE_REQUEST
        })
        const { userLogin : { userInfo } } = getState()
        const config = {
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.put('/api/profile/update', user, config)
        dispatch({
            type:UPDATE_PROFILE_SUCCESS,
            payload:data
        })
        sessionStorage.setItem('userInfo',JSON.stringify(data))
        setTimeout(()=>{
            dispatch({ type:UPDATE_PROFILE_RESET })
        },3000)
    } catch (error) {
        dispatch({
            type:UPDATE_PROFILE_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}