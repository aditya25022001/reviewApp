import { GET_CHANNELS_REQUEST, GET_CHANNELS_SUCCESS, GET_CHANNELS_FAIL } from '../constants/channelConstants'

export const getChannelsReducer = (state={channels:[]}, action) => {
    switch (action.type) {
        case GET_CHANNELS_REQUEST:
            return{
                loading:true
            }
        case GET_CHANNELS_SUCCESS:
            return{
                loading:false,
                channels:action.payload.channels
            }
        case GET_CHANNELS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}