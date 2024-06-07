// Armazena o rootReducer
import { configureStore } from "@reduxjs/toolkit";
import {createLogger} from "redux-logger";
import rootReducer from "./root-reducer.js";

const logger = createLogger();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;