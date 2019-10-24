import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faCheck } from '@fortawesome/free-solid-svg-icons'
import { markComplete } from "../store/actions/todo"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import usePriority from "../hooks/usePriority"
function ViewOneTodo(props) {
    const dispatch = useDispatch();
    const [ShowComplete, setShowComplete] = useState(false)
    const { getBackground } = usePriority()
    const markAsComplete = () => dispatch(
        markComplete({
            ...props.todo,
            complete: true
        }, props.index)
    )
    return (
        <>
            {props.todo.complete === false &&
                <div
                    onMouseEnter={() => setShowComplete(true)}
                    onMouseLeave={() => setShowComplete(false)}
                    className={`
            box level is-mobile is-mobile 
            ${getBackground(props.todo.priority.priority)}
            `}>
                    <div className="level-left">
                        {
                            ShowComplete &&
                            <button
                                onClick={markAsComplete}
                                className={`
                       button level-item is-white is-inverted
                       ${getBackground(props.todo.priority.priority)}
                       `}>
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                        }
                        <span className="level-item">
                            {props.todo.todo}
                        </span>
                    </div>
                    <div className="level-right">
                        <Link to={`/edit/${props.index}`}>
                            <button
                                className="button is-inverted is-info level-item">
                                <FontAwesomeIcon icon={faPen} />
                            </button>
                        </Link>
                    </div>
                </div>
            }
        </>
    )
}

export default ViewOneTodo
