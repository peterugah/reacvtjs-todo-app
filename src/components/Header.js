import React from 'react';
import { Link } from "react-router-dom";
function Header() {
    return (
        <div>
            <h1 className="title">TODO APPLICATION</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add">Add Todo</Link></li>
                <li><Link to="/todos">View Todos</Link></li>
                <li><Link to="/completed">Completed Todos</Link></li>
            </ul>
            <hr />
        </div>
    )
}

export default Header
