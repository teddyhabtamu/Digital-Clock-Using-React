import React, {useState, useEffect} from "react";
import "./index.css";
function DigitalClock(){
  const [hour, setHour] = useState(new Date().getHours());

  const [minute, setMinute] = useState(new Date().getMinutes());

  const [second, setSecond] = useState(new Date().getSeconds());

  
    useEffect(() => {
      const interValId = setInterval(() => {
        setHour(new Date().getHours());
        setMinute(new Date().getMinutes());
        setSecond(new Date().getSeconds());
      }, 1000);
      
    }, [])

    function padZero(number){
       return (number < 10? "0": "") + number;

    }
 
  

  return (
    <div className="container">
      <h1 className="clock-title">Digital Clock</h1>
      <div className="clock-content">
          <span>
            {" "}
            {padZero(hour)} : {padZero(minute)} : {padZero(second)}{" "}
          </span>
      </div>

    </div>
  );
}

export default DigitalClock