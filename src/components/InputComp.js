import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function InputComp(props) {
    const [InputRef, setInputRef] = useState(React.createRef())
    return (
        <div>
            <div className="field has-addons">
                <div className="control is-expanded">
                    <input ref={InputRef}
                        {...props.input}
                        type="text" className="input" placeholder="Enter the todo Item here" />
                </div>
                <div className="control">
                    {/* <button className="button" onClick={AddTodoHandler}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button> */}
                </div>
            </div>
        </div>
    )
}

export default InputComp
