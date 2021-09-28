import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expensesReducer";

const reducer = combineReducers({
    expenses: expenseReducer,

})


const defaultState = {};
const store = createStore(reducer,defaultState)
export default store;

