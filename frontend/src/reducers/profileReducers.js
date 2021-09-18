import { VIEW_PROFILE_REQUEST, VIEW_PROFILE_SUCCESS, VIEW_PROFILE_FAIL, VIEW_PROFILE_RESET, UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL, UPDATE_PROFILE_RESET } from "../constants/profileConstants";

export const getUserProfileReducer = (state={user:{}},action) => {
    switch(action.type){
        case VIEW_PROFILE_REQUEST:
            return{
                ...state,
                loading:true
            }
        case VIEW_PROFILE_SUCCESS:
            return{
                loading:false,
                user:action.payload
            }
        case VIEW_PROFILE_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case VIEW_PROFILE_RESET:
            return {
                user:{ }
             }
        default:
            return state
    }
}

export const updateUserProfileReducer = (state={user:{}},action) => {
    switch(action.type){
        case UPDATE_PROFILE_REQUEST:
            return{
                loading:true
            }
        case UPDATE_PROFILE_SUCCESS:
            return{
                loading:false,
                user:action.payload,
                success:true
            }
        case UPDATE_PROFILE_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case UPDATE_PROFILE_RESET:
            return {
                user:{ }
             }
        default:
            return state
    }
}