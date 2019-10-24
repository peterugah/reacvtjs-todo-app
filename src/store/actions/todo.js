import { ADD_TODO, MARK_COMPLETE, UPDATE_TODO } from "./types"
export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const markComplete = (todo, index) => {
    return {
        type: MARK_COMPLETE,
        payload: {
            todo,
            index
        }
    }
}

export const updateTodo = (todo, index) => {
    console.log("updating todo")
    return {
        type: UPDATE_TODO,
        payload: todo,
        index
    }
}