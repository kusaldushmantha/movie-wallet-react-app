import { call, put, select } from 'redux-saga/effects'
import {
    fetchMovies,
    fetchMoviesFailure,
    fetchMoviesFinished,
    fetchMoviesStart,
    fetchMoviesSuccess,
    setSearchTermInStateStart
} from "../actions";
import { getMovieFromAPI } from "../externalServices/moviedb.service";
import { getSearchQuery } from "../selectors/home.selectors";

export const fetchMoviesSaga = function* () {
    const searchQuery = yield select( getSearchQuery );
    yield put( fetchMoviesStart() );
    const apiResponse = yield call( getMovieFromAPI, searchQuery );
    if ( apiResponse.err ) {
        yield put( fetchMoviesFailure() );
    } else {
        yield put( fetchMoviesSuccess( apiResponse ) );
    }
    yield put( fetchMoviesFinished() );
}

export const setSearchQuerySaga = function* ( action ) {
    yield put( setSearchTermInStateStart( action.payload ) )
    yield put( fetchMovies() )
}
