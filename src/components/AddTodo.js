import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { addTodo } from '../store/actions/todo'
import PriorityComp from './Priority'

function Add(props) {
    const [InputRef, setInputRef] = useState(React.createRef())
    const [todo, setTodo] = useState("");
    const [Priority, setPriority] = useState(null)

    const checkAndSubmit = e => {
        return e.key === "Enter" ? AddTodoHandler() : false;
    }

    const AddTodoHandler = () => {
        if (todo.trim().length === 0) {
            alert("Please enter the todo item...")
            return false;
        }
        if (!Priority) {
            alert("Please select this todo's priority")
            return false;
        }
        props.addTodo({
            todo,
            priority: Priority,
            complete: false
        })
        setTodo("");
        setPriority(null);
        alert("todo item added")
        InputRef.current.focus();
    }

    return (
        <>
            <PriorityComp priority={p => setPriority(p)} setPriority={Priority} />
            <div className="field has-addons">
                <div className="control is-expanded">
                    <input ref={InputRef} onKeyPress={checkAndSubmit} onChange={e => setTodo(e.currentTarget.value)} value={todo} type="text" className="input" placeholder="Enter the todo Item here" />
                </div>
                <div className="control">
                    <button className="button" onClick={AddTodoHandler}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </div>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTodo }, dispatch)
}

export default connect(null, mapDispatchToProps)(Add)
