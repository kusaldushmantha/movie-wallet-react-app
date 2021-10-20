import initialState from "./initialState";
import {
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_FINISH,
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS
} from "../constants";

const homeReducer = ( state = initialState, action ) => {
    const { type, payload } = action;
    switch ( type ) {
        case FETCH_MOVIES_START:
            return state.set( 'isFetchingMovies', true );
        case FETCH_MOVIES_FINISH:
            return state.set( 'isFetchingMovies', false );
        case FETCH_MOVIES_SUCCESS:
            return state.set( 'movies', payload );
        case FETCH_MOVIES_FAILURE:
            return state.set( 'isFetchMoviesSuccess', false );
        default:
            return state;
    }
}

export default homeReducer;
