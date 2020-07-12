import React,{useContext} from 'react'
import { usercontext, channelcontext } from '../App'

function ComponentF() {
    const user=useContext(usercontext)
    const channel=useContext(channelcontext)
    return (
        <div>
            <h1>
                Hello {user} from {channel}
            </h1>
        </div>
    )
}

export default ComponentF
