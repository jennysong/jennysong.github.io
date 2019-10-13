import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { showHome } from './actions'
import './style/Login.css'

function Login(props) {

    const [time, setTime] = useState(0)
    const [date, setDate] = useState(0)

    const updateClock = () => {
        const now = new Date()
        const currentTime = now.toTimeString()
        const currentDate = now.toDateString()
        setTime(currentTime.substring(0, currentTime.indexOf(' ')))
        setDate(currentDate.substring(0, currentDate.lastIndexOf(' ')))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        window.open('https://ca.linkedin.com/in/jennyjsong', '_blank')
    }

    const goHome = () => {
        props.dispatch(showHome());
    }

    useEffect(() => {
        updateClock()
        const clockInterval = setInterval(updateClock, 1000)
        return () => {
            clearInterval(clockInterval)
        }
    })

    return (
        <div className='bg'>
            <div className='header'>
                <div className='inline'>82%</div>
                <div className='icon battery inline' />
                <div className='icon wifi inline' />
                <div className='inline'>{date}</div>
                <div className='inline'>{time}</div>
            </div>
            <div className='middle'>
                <div className='jennysong center' />
                <div className='text-center name'>Jenny Song</div>
                <form className='text-center' onSubmit={handleSubmit}>
                    <input className='submitbox' type='image' src={require('./assets/icon-aarow2.png')} alt='Submit'/>
                    <input className='textbox' type='password' placeholder='Enter Password'/>
                    <input className='submitbox' type='image' src={require('./assets/icon-aarow1.png')} alt='Submit'/>
                </form>
            </div>
            <div className='bottom'>
                <div className='icon-blocks' onClick={goHome}>
                    <img alt='' src={require('./assets/icon-power1.png')}/>
                    <p>Sleep</p>
                </div>
                <div className='icon-blocks'>
                    <img alt='' src={require('./assets/icon-power2.png')}/>
                    <p>Restart</p>
                </div>
                <div className='icon-blocks'>
                    <img alt='' src={require('./assets/icon-power3.png')}/>
                    <p>Shut Down</p>
                </div>
            </div>
        </div>
    )
}

export default connect()(Login)