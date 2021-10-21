import { GET_DEVICES_REQUEST, GET_DEVICES_SUCCESS, GET_DEVICES_FAIL } from '../constants/deviceConstants'

export const getDevicesReducer = (state={devices:[]}, action) => {
    switch (action.type) {
        case GET_DEVICES_REQUEST:
            return{
                loading:true
            }
        case GET_DEVICES_SUCCESS:
            return{
                loading:false,
                devices:action.payload.devices
            }
        case GET_DEVICES_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}