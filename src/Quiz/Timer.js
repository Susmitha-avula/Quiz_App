import { useEffect, useState } from "react";

function Timer({func}){
    const [time, setTime] = useState(600); // 10 minutes in seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
        setTime(prevTime => prevTime - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    const formatTime = (seconds) => {
        if(seconds===0){
            func()
        }
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    return(
        <h4>{formatTime(time)}</h4>
    )
}
export default Timer;