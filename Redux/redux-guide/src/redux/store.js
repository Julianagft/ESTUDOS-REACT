// Armazena o rootReducer

import {createStore, applyMiddleware} from "redux"; // Ele está assim pq o redux recomenda o uso do redux toolkit;

import logger from "redux-logger";

import rootReducer from "./root-reducer.js";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;