import effects from "./effects";
import { spawn } from 'redux-saga/effects'

const rootSaga = function* () {
    for ( let i = 0; i < effects.length; i++ ) {
        yield spawn( function* () {
            try {
                yield effects[ i ];
            } catch ( e ) {
                console.log( e );
            }
        } )
    }
}

export default rootSaga;
