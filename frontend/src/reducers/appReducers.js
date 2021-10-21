import { GET_APPS_REQUEST, GET_APPS_SUCCESS, GET_APPS_FAIL } from '../constants/appConstants'

export const getAppsReducer = (state={apps:[]}, action) => {
    switch (action.type) {
        case GET_APPS_REQUEST:
            return{
                loading:true
            }
        case GET_APPS_SUCCESS:
            return{
                loading:false,
                apps:action.payload.apps
            }
        case GET_APPS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}