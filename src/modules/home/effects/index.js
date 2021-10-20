import { takeLatest } from 'redux-saga/effects'
import { FETCH_MOVIES } from "../constants";
import { fetchMovies } from "./home.effects";

const effects = [ takeLatest( FETCH_MOVIES, fetchMovies ) ]

export default effects;

// const effects = [ takeLatest( FETCH_MOVIES, fetchMovies ) ]

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* effects() {
//     yield takeLatest(FETCH_MOVIES, fetchMovies);
// }
//
// export default effects;
