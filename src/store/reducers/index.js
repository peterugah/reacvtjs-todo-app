import todoReducer from "./todo"
import { combineReducers } from "redux"

export default combineReducers({
    todo: todoReducer
})