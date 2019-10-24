import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./main.scss"
import AddTodo from './components/AddTodo'
import ViewTodos from './components/ViewTodos'
import EditTodo from './components/EditTodo'
import Header from './components/Header'
const style = {
  body: {
    maxWidth: "700px",
    margin: "2rem auto"

  }
}
class App extends Component {
  render() {
    return (
      <Router>
        <div style={style.body}>
          <div className="box is-radiusless has-text-centered">
            <Header />
            {/* routes */}
            <Route path="/" exact render={() => (
              <div>click the add todo button...</div>
            )} />
            <Route path="/add" exact component={AddTodo} />
            <Route path="/todos" exact component={ViewTodos} />
            <Route path="/edit/:id" exact component={EditTodo} />
          </div>
        </div>

      </Router>
    )
  }
}

export default App
