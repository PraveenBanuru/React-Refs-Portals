import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

let timer;
export default function TimerChallenge({title, targetTime}){


    const timer =useRef();
   const dialog=useRef
    const [timerStared, setTimerStarted]=useState(false);
    const [timerExpired,setTimerExpired]=useState(false);

  

    function handleStart(){
     timer.current= setTimeout(()=>{setTimerExpired(true)},targetTime * 1000);
      setTimerStarted(true);
    }
   

    function handleStop(){
        clearTimeout(timer.current);
    }

    return(
    
        <>
        {timerExpired && <ResultModal  ref ={dialog} targetTime={targetTime} result='lost'/>}
        <section  className='challenge'>
        <h2> {title}</h2>
        
        <p className='challenge-time'>
            {targetTime} second{targetTime > 1 ? 's':''}
        </p>
        <p>
            <button onClick={!timerStared ? handleStart : handleStop}>
                {timerStared ? 'Stop': 'Start'} Challenge
            </button>
        
        </p>
        <p className={ timerStared ? 'active': undefined}>
            { timerStared ? 'Time is running ..' : 'Timner Inactive'}
        </p>
        </section>
        </>
    
    );
}