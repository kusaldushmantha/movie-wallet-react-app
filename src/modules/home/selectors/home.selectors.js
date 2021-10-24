import { createSelector } from 'reselect';

export const convertToJSObject = ( immutableObject ) => immutableObject.toJSON();
export const getStateData = createSelector( state => state, convertToJSObject )
export const getIsFetchingMovie = createSelector( getStateData, ( state ) => state.isFetchingMovie );
export const getIsFetchingMovieSuccess = createSelector( getStateData, ( state ) => state.isFetchMovieSuccess );
export const getFetchedMoviesImmutable = createSelector( getStateData, ( state ) => state.movie )
export const getFetchedMovie = createSelector( getFetchedMoviesImmutable, ( movie ) => movie.toJSON() );
export const getHomeState = createSelector( ( { home } ) => home, convertToJSObject )
export const getSearchQuery = createSelector( getHomeState, ( state ) => state.searchQuery );
export const getFavouriteMovies = createSelector( getStateData, ( state ) => state.favouriteMovies.toJSON().map( item => item.toJSON() ) )
