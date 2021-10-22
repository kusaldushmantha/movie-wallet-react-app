import { fromJS } from 'immutable';

const initialState = fromJS( {
    isFetchingMovies: false,
    movies: [],
    isFetchMoviesSuccess: true,
    searchQuery: '',
} )

export default initialState;
