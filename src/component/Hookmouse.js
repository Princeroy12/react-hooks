import React,{useState,useEffect} from 'react'

function Hookmouse() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const logmouseposition=(e)=>{
        console.log('Mouseevent')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("Effect used")
        window.addEventListener('mousemove',logmouseposition)

        return()=>{
            console.log("unmounting component")
            window.removeEventListener('mousemove',logmouseposition)
        }
    },[])
    return (
        <div>
            Hooks X-{x} Y-{y}
        </div>
    )
}

export default Hookmouse
