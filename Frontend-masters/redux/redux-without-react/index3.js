import {
    compose,
    applyMiddleware,
    bindActionCreators,
    combineReducers,
} from 'redux';
import { legacy_createStore as createStore } from 'redux';

const reducer = (state = {count: 1}) => state;


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

const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
    const logReducer = (state, action) => {
        console.log('Old State:', state,  action);
        const newState = reducer(state, action);
        console.log('new state:', newState, action);

        return newState;  
    }

    return createStore(logReducer, initialState, enhancer);
};

const store = createStore(reducer, compose(logEnhancer, monitorEnhancer)); // O único argumento obrigatório é a função do reducer. Todo o resto é opcional.

store.dispatch({ type: 'ADD' });