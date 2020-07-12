import React,{useState} from 'react'
import Hookmouse from './Hookmouse'

function Mousecontainer() {
    const [dispay,setdispay]=useState(true)
    return (
        <div>
            <button onClick={()=>setdispay(!dispay)}>Toggle Display</button>
            {dispay && <Hookmouse />}
        </div>
    )
}

export default Mousecontainer
