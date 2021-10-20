import { createSelector } from 'reselect';

export const convertToJSObject = ( immutableObject ) => immutableObject.toJSON();
export const getStateData = createSelector( state => state, convertToJSObject )
export const getIsFetchingMovies = createSelector( getStateData, ( state ) => state.isFetchingMovies );
export const getFetchedMovies = createSelector( getStateData, ( state ) => state.movies );
