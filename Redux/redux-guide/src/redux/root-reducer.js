import { combineReducers } from "redux"; // Pega todos os nossos reducers e guarda dentro desse hook;
import userReducer from "./user/reducer";

const rootReducer = combineReducers({userReducer});

export default rootReducer;

