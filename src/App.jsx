import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

let [counter,setCounter]=useState(0)
const addvalue=()=>{
  counter =counter+1
  if(counter <=20){  setCounter(counter)}
  // console.log(counter,"add")
}
const removevalue=()=>{
  counter =counter-1
  if(counter >=0){  setCounter(counter)}

}
 
  return (
    <>
     <h1>Chai or React</h1>
     <h2>Counter Value :{counter}</h2>
     <button onClick={addvalue}>Add value  {counter} </button>
     <br />
     <button onClick={removevalue}> Decrease value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
