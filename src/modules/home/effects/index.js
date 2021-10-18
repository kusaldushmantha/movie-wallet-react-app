import { takeLatest } from 'redux-saga/effects'
import { TEST_ACTION } from "../constants";
import { testAction } from "./home.effects";

const effects = [ takeLatest( TEST_ACTION, testAction ) ]

export default effects;
