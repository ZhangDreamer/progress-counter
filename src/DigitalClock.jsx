import React, {useEffect, useState} from 'react';
import fetchTime from './backend/fetchTime.js';

function DigitalClock(){

  const [time, setTime] = useState(null);
  const [timezone, setTimezone] = useState(null);

  useEffect(() => {
    const getTime = async () => {
      const fetchedTime = await fetchTime();
      setTime(new Date(fetchedTime.datetime));
      setTimezone(fetchedTime.abbreviation);
    }

    getTime();
  }, []);

  useEffect(() => {
    if (time) {
      const interval = setInterval(() => {
        setTime((prevTime) => new Date(prevTime.getTime() + 1000));
      }, 1000);
      
      return () => clearInterval(interval); 
    }
  }, [time]);


  function formatTime(){
    if(time){
      let hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const meridiem = hours >= 12 ? "PM" : "AM";
  
      hours = hours % 12 || 12;
      return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem} ${timezone}`;
    } else {
      return ''
    }
  }

  function padZero(number){
    return (number < 10 ? "0" : "") + number;
  }


  return(
  <div>
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  </div>
  );
}

export default DigitalClock