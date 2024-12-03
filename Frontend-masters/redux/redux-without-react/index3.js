import {
    compose,
    applyMiddleware,
    bindActionCreators,
    combineReducers,
} from 'redux';
import { legacy_createStore as createStore } from 'redux';

const reducer = state => state;


const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
    const monitorReducer = (state, action) => {
        const start = performance.now();

        const newState = reducer(state, action);

        const end = performance.now();

        const diff = end - start;
        console.log(diff);

        return newState;
    }
    
    return createStore(reducer, initialState, enhancer);
}

const store = createStore(reducer, () => {}, monitorEnhancer); // O único argumento obrigatório é a função do reducer. Todo o resto é opcional.

store.dispatch({ type: 'ADD' });