import { takeLatest } from 'redux-saga/effects'
import { FETCH_MOVIES, SET_SEARCH_TERM } from "../constants";
import { fetchMoviesSaga, setSearchQuerySaga } from "./home.effects";

const effects = [
    takeLatest( FETCH_MOVIES, fetchMoviesSaga ),
    takeLatest( SET_SEARCH_TERM, setSearchQuerySaga ),
];

export default effects;
