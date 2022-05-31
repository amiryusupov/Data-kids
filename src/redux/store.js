import {createStore, combineReducers} from "redux";
import LangReducer from "./reducers/LangReducer";

const reducers = combineReducers({
    lang: LangReducer,
})

const store = createStore(reducers);

export default store;