import initialState from "./initialState";
import {
    ADD_MOVIE_TO_FAVOURITES,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_FINISH,
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    SET_SEARCH_TERM_START
} from "../constants";
import { fromJS } from "immutable";

const homeReducer = ( state = initialState, action ) => {
    const { type, payload } = action;
    switch ( type ) {
        case FETCH_MOVIES_START:
            return state.set( 'isFetchingMovie', true );
        case FETCH_MOVIES_FINISH:
            return state.set( 'isFetchingMovie', false );
        case FETCH_MOVIES_SUCCESS:
            return state.set( 'movie', fromJS( payload ) ).set( 'isFetchMovieSuccess', true );
        case FETCH_MOVIES_FAILURE:
            return state.set( 'isFetchMovieSuccess', false );
        case SET_SEARCH_TERM_START:
            return state.set( 'searchQuery', payload.searchTerm )
        case ADD_MOVIE_TO_FAVOURITES:
            return state.set( 'favouriteMovies', state.get( 'favouriteMovies', [] ).push( fromJS( payload ) ) )
        default:
            return state;
    }
}

export default homeReducer;
