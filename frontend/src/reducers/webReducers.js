import { GET_WEBSITES_REQUEST, GET_WEBSITES_SUCCESS, GET_WEBSITES_FAIL } from '../constants/webConstants'

export const getWebsitesReducer = (state={websites:[]}, action) => {
    switch (action.type) {
        case GET_WEBSITES_REQUEST:
            return{
                loading:true
            }
        case GET_WEBSITES_SUCCESS:
            return{
                loading:false,
                websites:action.payload.websites
            }
        case GET_WEBSITES_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}