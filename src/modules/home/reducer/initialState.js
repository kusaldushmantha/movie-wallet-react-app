import { fromJS } from 'immutable';

const initialState = fromJS( {
    isFetchingMovies: false,
    movies: [],
    isFetchMoviesSuccess: true,
} )

export default initialState;
