import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createReducer } from "./rootReducer";
import { applyMiddleware, createStore } from "redux";
import immutableTransform from 'redux-persist-transform-immutable'
import rootSaga from "./rootSaga";

const persistConfig = {
    transforms: [ immutableTransform() ],
    key: 'root',
    storage,
    whitelist: [ 'auth' ], // Only this will be persisted to the browser localStorage
}

export default ( state = {}, history ) => {
    const sagaMiddleware = createSagaMiddleware();
    const persistedReducer = persistReducer( persistConfig, createReducer() )
    const store = createStore( persistedReducer, state, applyMiddleware( sagaMiddleware ) )
    sagaMiddleware.run( rootSaga );
    return store;
}
