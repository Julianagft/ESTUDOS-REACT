import {
    createStore,
    compose,
    applyMiddleware,
    bindActionCreators,
} from 'redux';

const makeLouder = string => string.toUpperCase();
const repeatThreeTimes = string => string.repeat(3);
const embolden = string => string.bold();

const makeLouderAndRepeatThreeTimes = string => repeatThreeTimes(makeLouder(string));

console.log(makeLouderAndRepeatThreeTimes('hello')); 