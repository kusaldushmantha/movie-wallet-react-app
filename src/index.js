import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import configureStore from './internal/configureStore'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = configureStore()

const AppInitializer = ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById( 'root' )
);

if ( process.env.NODE_ENV !== 'production' && module.hot ) {
    module.hot.accept( './app', AppInitializer )
}
