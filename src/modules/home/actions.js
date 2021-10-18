import { ADD_MOVIE_TO_FAVOURITES, FETCH_MOVIES } from "./constants";
import { ActionCreator } from "../../internal/actionCreator";

export const fetchMovies = ActionCreator( FETCH_MOVIES );
export const addToFavourites = ActionCreator( ADD_MOVIE_TO_FAVOURITES, ( movieId ) => ( { movieId } ) )
