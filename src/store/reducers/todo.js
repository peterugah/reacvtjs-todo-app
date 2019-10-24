import { ADD_TODO, MARK_COMPLETE, UPDATE_TODO } from "../actions/types"

let initState = [{
    todo: "enter some records",
    complete: false,
    priority: {
        name: "Important",
        priority: 1,
        selected: false,
    }
}, {
    todo: "read your books",
    complete: false,
    priority: {
        name: "Casual",
        priority: 2,
        selected: false,
    }
}]

export default (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_TODO:
            return [...state, payload].reverse();
        case MARK_COMPLETE:
            return [...state.slice(0, payload.index), payload.todo, ...state.slice(payload.index + 1)]
        default:
            return state;
    }
}