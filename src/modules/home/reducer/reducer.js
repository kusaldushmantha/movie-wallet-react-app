import initialState from "./initialState";
import { FETCH_MOVIES_FINISH, FETCH_MOVIES_START } from "../constants";

const homeReducer = ( state = initialState, action ) => {
    const { type, payload } = action;
    switch ( type ) {
        case FETCH_MOVIES_START:
            return state.set( 'isFetchingMovies', true );
        case FETCH_MOVIES_FINISH:
            return state.set( 'isFetchingMovies', false );
        default:
            return state;
    }
}

export default homeReducer;
