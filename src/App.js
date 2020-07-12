import React from 'react';
import './App.css';
import FetchingData from './component/FetchingData';

//import ComponentT from './component/ComponentT';
//import ComponentP from './component/ComponentP';
//import ComponentQ from './component/ComponentQ';
//import HookCounter from './component/HookCounter';
//import HookCounterTwo from './component/HookCounterTwo';
//import HookCounter3 from './component/HookCounter3';
//import HookCounter4 from './component/HookCounter4';
//import HookCounter1 from './component/HookCounter1';
//import Hookmouse from './component/Hookmouse';
//import Mousecontainer from './component/Mousecontainer';
//import IntervalHookcounter from './component/IntervalHookcounter';
//import Datafetching from './component/Datafetching';
//import ComponentC from './component/ComponentC';
//import CounterOne from './component/CounterOne';
//import CounterTwo from './component/Countertwo';
//import CounterThree from './component/Counterthree';

// export const usercontext=React.createContext()
// export const channelcontext=React.createContext()

// const initialState=0
// const reducer=(state,action)=>{
//     switch(action){
//         case 'increment':
//         return state+1;
//         case 'decrement':
//         return state-1;
//         case 'reset':
//         return initialState;
//         default:
//             return state;
//     }
// }

// export const CountContext=React.createContext()

function App() {
  // const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <div className="App">
    
    <FetchingData />
   
  </div>);
    /* // <CountContext.Provider value={{countState:count, countDispatch:dispatch}}>
    // <div className="App">
    //   <div>Cout:-{count}</div>
    //    <ComponentP />
    //    <ComponentQ />
    //    <ComponentT />
      */

     /* <usercontext.Provider value="Prince">
    //     <channelcontext.Provider value="NIT jsr">
    //     <ComponentC />
    //     </channelcontext.Provider>
    //   </usercontext.Provider> */
     
    /* // </div>
    // </CountContext.Provider> */

}

export default App;
