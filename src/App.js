import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

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
            <div class='login'>
                <div class='jennysong center' />
                <div class='text-center name'>Jenny Jieun Song</div>
                <form class='text-center' onSubmit={handleSubmit}>
                    <input class='submitbox' type='image' src={require('./assets/icon-aarow2.png')} alt='Submit'/>
                    <input class='textbox' type='password'/>
                    <input class='submitbox' type='image' src={require('./assets/icon-aarow1.png')} alt='Submit'/>
                </form>
            </div>
            <div style={{display:'none'}}>
                <img src={require('./assets/icon-power1.png')}/> Sleep
                <img src={require('./assets/icon-power2.png')}/> Restart
                <img src={require('./assets/icon-power3.png')}/> Shut Down
            </div>
            {/* <a href='https://ca.linkedin.com/in/jennyjsong' target='_blank'>
                Hello World
            </a> */}
        </div>
    );
}

export default App;
