import { call, put } from 'redux-saga/effects'
import {
    fetchMoviesFailure,
    fetchMoviesFinished,
    fetchMoviesStart,
    fetchMoviesSuccess
} from "../actions";
import { getMovieFromAPI } from "../externalServices/moviedb.service";

export const fetchMovies = function* () {
    yield put( fetchMoviesStart() );
    const apiResponse = yield call( getMovieFromAPI.bind( null, 'matrix' ) );
    console.log( apiResponse )
    if ( apiResponse.err ) {
        yield put( fetchMoviesFailure() )
    } else {
        yield put( fetchMoviesSuccess( apiResponse ) )
    }
    yield put( fetchMoviesFinished() )
}
