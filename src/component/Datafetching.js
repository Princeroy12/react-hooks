import React,{useState,useEffect} from 'react'
import axios from 'axios'

function Datafetching() {
    const [Posts,setPosts]=useState({})
    const [id,setid]=useState(1)
    const [idFromButton,setidfrombutton]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[idFromButton])

    const Handleclick=()=>{
        setidfrombutton(id)
    }

    return (
        <div>
            <h1>Post List</h1>
            <input type="text" value={id} onChange={(e)=>setid(e.target.value)} />
            <button type="button" onClick={Handleclick}>Fetch Data</button>
            <div>{Posts.title}</div>
            {/* <ul>
                {
                    Posts.map(post=><li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default Datafetching
