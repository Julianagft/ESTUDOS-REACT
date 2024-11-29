import {
    compose,
    applyMiddleware,
    bindActionCreators,
} from 'redux';
import { legacy_createStore as createStore } from 'redux';

const initialState = { value: 0 };

const INCREMENT = 'INCREMENT';
const ADD = 'ADD';

const incrementAction = { type: INCREMENT };

const increment = () => ({ type: INCREMENT});
const add = (amount) => ({ type: ADD, payload: amount });

const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return { value: state.value + 1 };
    };

    if (action.type === ADD) {
        return { value: state.value + action.payload };
    };

    return state;
};

const store = createStore(reducer, initialState);

const subscriber = () => console.log('SUBSCRIBER', store.getState());

const actions = bindActionCreators({ increment, add }, store.dispatch);
// O primeiro argumento é o objeto com todos as diferentes actionns creators que queremos unir e o segundo é AO QUE queremos uni-los. 

const [dispatchIncrement, dispatchAdd] = [increment, add].map((fn) => compose(store.dispatch, fn));

console.log("actions: ", actions);
// store.subscribe(subscriber);
// store.dispatch(increment());
// store.dispatch(add(1000));
actions.add(1000);
actions.increment();

console.log(store.getState());
