import React,{useState,useEffect} from 'react'

function HookCounter1() {
    const [count,setcount]=useState(0)
    const [name,setname]=useState('')
    useEffect(()=>{
        console.log("updating Document by useEffect")
        document.title=`You Clicked ${count} Times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
            <button onClick={()=>setcount(prevState=>prevState+1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounter1
