import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import reducer from './reducers.js'
import './style/index.css'
import Login from './Login.js'
import Home from './Home.js'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/macbook">
                    <Home />
                </Route>
            </Switch>
        </Router>
    </Provider>
, document.getElementById('root'))