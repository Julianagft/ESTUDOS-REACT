import { createStore } from 'redux';
import { reducer } from './reducer';  

const enhancer = window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_();

export const store = createStore(reducer, enhancer);