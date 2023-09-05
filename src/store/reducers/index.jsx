import { combineReducers } from "redux";
import accountReducer from "./accountReducer";

const allReducers = combineReducers({
    favouriteList: accountReducer,
});

export default allReducers;
