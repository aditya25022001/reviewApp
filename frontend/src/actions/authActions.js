import { USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_RESET, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL, RESET_PASSWORD_RESET } from '../constants/authConstants'
import axios from 'axios'

export const userRegisterAction = (name, email, number, password) => async (dispatch) => {
    try {
        dispatch({
            type:USER_REGISTER_REQUEST,
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post('/api/auth/register',{ name, email, number, password }, config)
        dispatch({
            type:USER_REGISTER_SUCCESS,
            payload:data
        })        
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        }) 
        sessionStorage.setItem("userInfo",JSON.stringify(data))
    } catch (error) {
        dispatch({
            type:USER_REGISTER_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const userLoginAction = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type:USER_LOGIN_REQUEST,
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const {data} = await axios.post('/api/auth/login',{ email, password }, config)
        dispatch({
            type:USER_LOGIN_SUCCESS,
            payload:data
        })        
        sessionStorage.setItem("userInfo",JSON.stringify(data))
        dispatch({ type:FORGOT_PASSWORD_RESET })
    } catch (error) {
        dispatch({
            type:USER_LOGIN_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const userLogoutAction = () => async(dispatch)=>{
    sessionStorage.removeItem('userInfo')
    dispatch({ type:USER_LOGOUT })
    dispatch({ type:FORGOT_PASSWORD_RESET })
}

export const userRequestOtpAction = (email) => async(dispatch)=>{
    try {
        dispatch({
            type:FORGOT_PASSWORD_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const { data } = await axios.post('/api/auth/sendOtp',{ email },config)
        dispatch({
            type:FORGOT_PASSWORD_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:FORGOT_PASSWORD_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const resetPasswordAction = (password, id) => async(dispatch) => {
    try {
        dispatch({
            type:RESET_PASSWORD_REQUEST
        })
        const config = {
            headers:{
                'Content-type':'application/json'
            }
        }
        const { data } = await axios.put(`/api/auth/reset/${id}`,{ password, id },config)
        dispatch({ 
            type:FORGOT_PASSWORD_RESET
        })
        dispatch({
            type:RESET_PASSWORD_SUCCESS,
            payload:data
        })
        dispatch({ 
            type:RESET_PASSWORD_RESET
        })
    } catch (error) {
        dispatch({
            type:RESET_PASSWORD_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}