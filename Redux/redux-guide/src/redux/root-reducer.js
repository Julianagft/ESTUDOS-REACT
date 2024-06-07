import { combineReducers } from "redux"; // Pega todos os nossos reducers e guarda dentro desse hook;
import userReducer from "./user/reducer";
import cartReducer from "./cart/slice";

const rootReducer = combineReducers({userReducer, cartReducer});

export default rootReducer;

