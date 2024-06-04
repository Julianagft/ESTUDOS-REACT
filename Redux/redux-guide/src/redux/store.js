// Armazena o rootReducer

import {createStore} from "redux"; // Ele está assim pq o redux recomenda o uso do redux toolkit;

import rootReducer from "./root-reducer.js";

const store = createStore(rootReducer);

export default store;