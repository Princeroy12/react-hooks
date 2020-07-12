import React,{useState} from 'react'

function HookCounter3() {
    const [name,setname]=useState({firstname:'',lastname:''})
    return (
        <div>
            <form>
                <div>
                    <input type="text" placeholder="First Name" value={name.firstname} onChange={(e)=>setname({...name,firstname:e.target.value})} />
                </div>
                <div>
                    <input type="text" placeholder="Last Name" value={name.lastname} onChange={(e)=>setname({...name,lastname:e.target.value})} />
                </div>
                 <h2>Your first Name is {name.firstname}</h2>
                 <h2>Your Last Name is {name.lastname}</h2>
                 <h5>{JSON.stringify(name)}</h5>
            </form>
        </div>
    )
}

export default HookCounter3
