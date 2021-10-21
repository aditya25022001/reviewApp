import { GET_CAFES_REQUEST, GET_CAFES_SUCCESS, GET_CAFES_FAIL } from '../constants/cafeConstants'

export const getCafesReducer = (state={cafes:[]}, action) => {
    switch (action.type) {
        case GET_CAFES_REQUEST:
            return{
                loading:true
            }
        case GET_CAFES_SUCCESS:
            return{
                loading:false,
                cafes:action.payload.cafes
            }
        case GET_CAFES_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}