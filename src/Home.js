import React from 'react'
import { connect } from 'react-redux'
import './style/Home.scss'
import HeaderMenu from './components/HeaderMenu'

function Home() {
    return (
        <div className='home'>
            <div className='header'>
                <HeaderMenu text='appleIcon' icon />
                <HeaderMenu text='Finder' bold />
                <HeaderMenu text='File' />
                <HeaderMenu text='Edit' />
                <HeaderMenu text='View' />
                <HeaderMenu text='Go' />
                <HeaderMenu text='Window' />
                <HeaderMenu text='Help' />
            </div>
        </div>
    )
}

// const mapStateToProps = state => ({show: state.show})
export default connect()(Home)