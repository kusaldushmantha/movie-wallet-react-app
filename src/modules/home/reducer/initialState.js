import { fromJS } from 'immutable';

const initialState = fromJS( {
    isFetchingMovie: false,
    movie: {},
    isFetchMovieSuccess: false,
    searchQuery: '',
} )

export default initialState;
