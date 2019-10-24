import React, { useEffect } from 'react'
import usePririty from "../hooks/usePriority";
function Priority(props) {
    const { SelectedPriority, setSelectedPriority, priorityList, setBackground } = usePririty()

    // tell the parent of the selected Property
    useEffect(() => {
        props.priority(SelectedPriority)
    }, [SelectedPriority])


    // listen from the parent
    useEffect(() => {
        setSelectedPriority(props.setPriority);
    }, [props.setPriority])

    return (
        <div className="panel">
            <div className="panel-heading">
                <p>Priority</p>
            </div>

            <div className="tabs is-boxed is-centered ">
                <ul>
                    {
                        priorityList.map((p, index) => (
                            <li
                                key={p.priority}
                                className={`${setBackground(p)}`}
                                onClick={() => setSelectedPriority(p)}>
                                <a>
                                    {p.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Priority
