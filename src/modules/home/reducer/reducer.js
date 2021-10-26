import initialState from "./initialState";
import {
    ADD_MOVIE_TO_FAVOURITES,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_FINISH,
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    REMOVE_MOVIE_FROM_FAVOURITES,
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
            return state.set( 'searchQuery', payload.searchTerm );
        case ADD_MOVIE_TO_FAVOURITES:
            const existingFavouriteMovies = state.get( 'favouriteMovies' );
            return state.set( 'favouriteMovies', existingFavouriteMovies.push( fromJS( payload ) ) );
        case REMOVE_MOVIE_FROM_FAVOURITES:
            const indexToRemove = state.get( 'favouriteMovies', [] ).indexOf( fromJS( payload ) );
            if ( indexToRemove > -1 ) {
                const updatedFavouriteMovies = state.get( 'favouriteMovies' ).remove( indexToRemove );
                return state.set( 'favouriteMovies', updatedFavouriteMovies );
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default homeReducer;
