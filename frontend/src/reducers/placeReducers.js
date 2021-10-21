import { GET_PLACES_REQUEST, GET_PLACES_SUCCESS, GET_PLACES_FAIL } from '../constants/placeConstants'

export const getPlacesReducer = (state={places:[]}, action) => {
    switch (action.type) {
        case GET_PLACES_REQUEST:
            return{
                loading:true
            }
        case GET_PLACES_SUCCESS:
            return{
                loading:false,
                places:action.payload.places
            }
        case GET_PLACES_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}