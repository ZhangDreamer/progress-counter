import React, {useEffect, useState, useContext} from 'react';
import { LocationContext } from './App.jsx';
import fetchTime from './backend/fetchTime.js';

function DigitalClock(props){

  const location = useContext(LocationContext);

  const [time, setTime] = useState(null);
  const [timezone, setTimezone] = useState(null);

  useEffect(() => {
      const getTime = async () => {
        try {
          const fetchedTime = await fetchTime(location);
          const timestamp = String(fetchedTime.datetime);
          const splicedTimestamp = timestamp.slice(0,19);
          const date = new Date(splicedTimestamp);
          setTime(date);
          setTimezone(fetchedTime.abbreviation);
          props.setDate(date.toLocaleDateString('en-CA'));
          
        } catch (error) {
          console.error("Failed to fetch time:", error);

          const fallbackDate = new Date();
          
          setTime(fallbackDate);
          props.setDate(fallbackDate.toLocaleDateString('en-CA'));
        }
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