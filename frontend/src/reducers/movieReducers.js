import { GET_MOVIES_REQUEST, GET_MOVIES_SUCCESS, GET_MOVIES_FAIL, ADD_MOVIE_FAIL, ADD_MOVIE_SUCCESS, ADD_MOVIE_RESET, ADD_MOVIE_REQUEST } from '../constants/movieConstants'

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

export const addMovieReducer = (state={movie:{}}, action) => {
    switch (action.type) {
        case ADD_MOVIE_REQUEST:
            return{
                loading:true
            }
        case ADD_MOVIE_SUCCESS:
            return{
                loading:false,
                movie:action.payload.movie,
                success:true
            }
        case ADD_MOVIE_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case ADD_MOVIE_RESET:
            return {
                movie:{}
            }
        default:
            return state
    }
}