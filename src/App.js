import React from 'react';
import { connect } from 'react-redux'
import Login from './Login.js';
import Home from './Home.js';

function App(props) {
    if (props.show === 'login') {
        return <Login />
    }
    if (props.show === 'home') {
        return <Home />
    }
}

const mapStateToProps = state => ({show: state.show})
export default connect(mapStateToProps)(App)