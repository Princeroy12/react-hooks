import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount=0;
    const [count,setcount] = useState(initialCount)


    const incrementbyFive=()=>{
        for(let i=0;i<5;i++){
        setcount(prevCount=>prevCount+1)
        }
    }
    return (
        <div>
            count: {count}
            <button onClick={()=>setcount(initialCount)}>Reset</button>
            <button onClick={()=>setcount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setcount(prevCount=>prevCount-1)}>Decrement</button>
            <button onClick={incrementbyFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo
