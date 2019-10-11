import React, { useEffect, useState } from 'react';
import './style/Login.css';

export default function Login() {

    const [time, setTime] = useState(0);
    const [date, setDate] = useState(0);

    const updateClock = () => {
        const now = new Date();
        const currentTime = now.toTimeString();
        const currentDate = now.toDateString();
        setTime(currentTime.substring(0, currentTime.indexOf(' ')));
        setDate(currentDate.substring(0, currentDate.lastIndexOf(' ')));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        window.open('https://ca.linkedin.com/in/jennyjsong', '_blank')
    }

    useEffect(() => {
        updateClock();
        setInterval(updateClock, 1000);
    });

    return (
        <div class='bg'>
            <div class='header'>
                <div class='inline'>82%</div>
                <div class='icon battery inline' />
                <div class='icon wifi inline' />
                <div class='inline'>{date}</div>
                <div class='inline'>{time}</div>
            </div>
            <div class='middle'>
                <div class='jennysong center' />
                <div class='text-center name'>Jenny Song</div>
                <form class='text-center' onSubmit={handleSubmit}>
                    <input class='submitbox' type='image' src={require('./assets/icon-aarow2.png')} alt='Submit'/>
                    <input class='textbox' type='password' placeholder='Enter Password'/>
                    <input class='submitbox' type='image' src={require('./assets/icon-aarow1.png')} alt='Submit'/>
                </form>
            </div>
            <div class='bottom'>
                <div class='icon-blocks'>
                    <img src={require('./assets/icon-power1.png')}/>
                    <p>Sleep</p>
                </div>
                <div class='icon-blocks'>
                    <img src={require('./assets/icon-power2.png')}/>
                    <p>Restart</p>
                </div>
                <div class='icon-blocks'>
                    <img src={require('./assets/icon-power3.png')}/>
                    <p>Shut Down</p>
                </div>
            </div>
        </div>
    );
}
