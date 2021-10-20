import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createReducer } from "./rootReducer";
import { applyMiddleware, createStore } from "redux";
import immutableTransform from 'redux-persist-transform-immutable'
import rootSaga from "./rootSaga";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
    transforms: [ immutableTransform() ],
    key: 'root',
    storage,
    whitelist: [ 'auth' ], // Only this will be persisted to the browser localStorage
}

const configureStore = ( preloadedState ) => {

    const rootReducer = createReducer();

    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [ sagaMiddleware ];
    const middlewareEnhancers = applyMiddleware( ...middlewares )

    const enhancers = [ middlewareEnhancers ]
    const composedEnhancers = composeWithDevTools( ...enhancers )
    const persistedReducer = persistReducer( persistConfig, rootReducer )

    const store = createStore( persistedReducer, preloadedState, composedEnhancers )
    sagaMiddleware.run( rootSaga );
    // sagaMiddleware.run( effects );

    if ( process.env.NODE_ENV !== 'production' && module.hot ) {
        module.hot.accept( './rootReducer', () => store.replaceReducer( rootReducer ) )
    }

    return store;
}

export default configureStore;
