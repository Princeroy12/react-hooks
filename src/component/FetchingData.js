import React,{useReducer,useEffect} from 'react'
import axios from 'axios'

const initialState={
    loading:true,
    Post:{},
    Error:''
}

const reducer=((state,action)=>{
    switch(action.type){
        case 'Fetch_success':
            return {
                loading:false,
                Post:action.payload,
                Error:''
            }
        case 'Fetch_error':
            return{
                loading:false,
                Post:{},
                Error:'Something Went Wrong'
            }  
            default:
                return state  
    }
})

function FetchingData() {
    const [state,dispatch]=useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>{
            dispatch({type:'Fetch_success',payload: response.data})
        })
        .catch(error=>{
            dispatch({type:'Fetch_error'})
        })
    },[])
    return (
        <div>
            {state.loading?'Loading...':state.Post.title}
            {state.Error?state.Error:null}
        </div>
    )
}

export default FetchingData
