import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import './style/Login.scss'

function Login() {

    const [time, setTime] = useState(moment().format('LT'))
    const [date, setDate] = useState(moment().format('ddd MMM D'))

    const updateClock = () => {
        setDate(moment().format('ddd MMM D'))
        setTime(moment().format('LT'))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        window.location.assign('/macbook')
    }

    const openLinkedIn = (event) => {
        event.preventDefault()
        window.open('https://ca.linkedin.com/in/jennyjsong', '_blank')
    }

    useEffect(() => {
        const clockInterval = setInterval(updateClock, 1000)
        return () => {
            clearInterval(clockInterval)
        }
    })

    return (
        <div className='login'>
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
                    <img className='submitbox' src={require('./assets/icon-aarow2.png')} />
                    <input className='textbox' type='password' placeholder='Enter Password'/>
                    <input className='submitbox' type='image' src={require('./assets/icon-aarow1.png')} alt='Submit'/>
                </form>
            </div>
            <div className='bottom'>
                <div className='icon-blocks'>
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