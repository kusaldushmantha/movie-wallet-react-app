import moduleInfo from "./moduleInfo";
import { all, call, spawn } from 'redux-saga/effects'

const moduleEffects = () => {
    return moduleInfo.map( module => module.name ).map( ( moduleName ) => require( `../effects/${ moduleName }/effects` ).default )
};

const rootSaga = function* () {
    const sagas = moduleEffects()

    yield all( sagas.map( saga =>
        spawn( function* () {
            while ( true ) {
                try {
                    yield call( saga )
                    break
                } catch ( e ) {
                    console.log( e )
                }
            }
        } ) )
    );
}

export default rootSaga;
