// import { compose, applyMiddleware } from 'redux';

import { thunk } from 'redux-thunk';

import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from '../reducers/rootReducer';


//const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production'
    /*composeEnhancers(
        applyMiddleware( thunk )
    )*/
 });


