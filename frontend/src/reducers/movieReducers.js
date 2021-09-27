import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_FAIL } from '../constants/movieConstants'

export const getMoviesReducer = (state={movies:[]}, action) => {
    switch (action.type) {
        case GET_MOVIES_REQUEST:
            return{
                loading:true
            }
        case GET_MOVIES_SUCCESS:
            return{
                loading:false,
                movies:action.payload.movies
            }
        case GET_MOVIES_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        default:
            return state
    }
}