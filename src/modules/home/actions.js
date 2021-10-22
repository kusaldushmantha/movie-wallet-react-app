import {
    ADD_MOVIE_TO_FAVOURITES,
    FETCH_MOVIES,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_FINISH,
    FETCH_MOVIES_START,
    FETCH_MOVIES_SUCCESS,
    SET_SEARCH_TERM,
    SET_SEARCH_TERM_START,
} from "./constants";
import { ActionCreator } from "../../internal/actionCreator";

export const fetchMovies = ActionCreator( FETCH_MOVIES );
export const fetchMoviesStart = ActionCreator( FETCH_MOVIES_START );
export const fetchMoviesFailure = ActionCreator( FETCH_MOVIES_FAILURE );
export const fetchMoviesSuccess = ActionCreator( FETCH_MOVIES_SUCCESS, ( movie ) => ( movie ) );
export const fetchMoviesFinished = ActionCreator( FETCH_MOVIES_FINISH );
export const addMovieToFavourites = ActionCreator( ADD_MOVIE_TO_FAVOURITES, ( movieId ) => ( { movieId } ) );
export const setSearchTermInState = ActionCreator( SET_SEARCH_TERM, ( searchTerm ) => ( { searchTerm } ) );
export const setSearchTermInStateStart = ActionCreator( SET_SEARCH_TERM_START, ( searchTerm ) => ( searchTerm ) );
