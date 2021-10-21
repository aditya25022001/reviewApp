import { GET_AUTOMOBILES_REQUEST, GET_AUTOMOBILES_SUCCESS, GET_AUTOMOBILES_FAIL } from '../constants/autoConstants'

export const getAutomobilesReducer = (state={automobiles:[]}, action) => {
    switch (action.type) {
        case GET_AUTOMOBILES_REQUEST:
            return{
                loading:true
            }
        case GET_AUTOMOBILES_SUCCESS:
            return{
                loading:false,
                automobiles:action.payload.automobiles
            }
        case GET_AUTOMOBILES_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}