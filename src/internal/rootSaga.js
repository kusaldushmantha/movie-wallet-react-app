import moduleInfo from "./moduleInfo";
import { spawn } from 'redux-saga/effects'

const moduleEffects = () => {
    return moduleInfo
        .map( module => module.name )
        .map( ( moduleName ) => require( `../modules/${ moduleName }/effects` ).default )
};

const rootSaga = function* () {
    const moduleSagas = moduleEffects()
    console.log( moduleSagas.length )
    for ( let i = 0; i < moduleSagas.length; i++ ) {
        yield spawn( function* () {
            try {
                yield moduleSagas[ i ];
            } catch ( e ) {
                console.log( e );
            }
        } )
    }
}

export default rootSaga;
