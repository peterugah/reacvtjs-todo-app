import React from 'react'
import ViewOneTodo from './ViewOneTodo'
import { useSelector } from "react-redux"
function ViewTodos() {
    const todo = useSelector(state => state.todo)
    return (
        <>
            {
                todo.map((todo, index) => (
                    <ViewOneTodo key={index} todo={todo} index={index} />
                ))
            }
        </>
    )
}

export default ViewTodos
