import moduleInfo from './moduleInfo'
import { combineReducers } from "redux";

const moduleReducers = () => {
    return moduleInfo.map( reducer => reducer.name ).map( ( moduleName ) =>
        [ moduleName, require( `../modules/${ moduleName }/reducer` ).default ] )
};

export const createReducer = () => {
    const moduleReducersList = moduleReducers()
    const appReducer = {}
    moduleReducersList.forEach( ( module, reducer ) => appReducer[ module ] = reducer )
    return combineReducers( appReducer )
}
