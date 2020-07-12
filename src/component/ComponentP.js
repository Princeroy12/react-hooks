import React,{useContext} from 'react'
import { CountContext } from '../App'

function ComponentP() {
    const countcontext=useContext(CountContext)
    return (
        <div>
            Component P:-{countcontext.countState}
            <button onClick={()=>countcontext.countDispatch('increment')}>Incerement</button>
            <button onClick={()=>countcontext.countDispatch('decrement')}>Decrement</button>
            <button onClick={()=>countcontext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentP
