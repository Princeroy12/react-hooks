import React,{useState,useEffect} from 'react'

function IntervalHookcounter() {
    const [count,setcount]=useState(0)

    const tick=()=>{
        setcount(prevCount=>prevCount+1)
    }
    
    useEffect(()=>{
        const Interval=setInterval(tick,1000)
        return()=>{
            clearInterval(Interval)
        }
    },[])
    return (
        <div>
           <h1> {count}</h1>
        </div>
    )
}

export default IntervalHookcounter
