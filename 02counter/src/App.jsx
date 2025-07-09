import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // HOOKS
  let [counter, KanganCounter]=useState(15)

  // let counter =15

const addValue = ()=>{
  
  if(counter>=20){
  console.log("Reached Limit");
  return;  //to stop further execution
}
else{
  console.log("Clicked",counter);
  KanganCounter(counter+1)
}
}
const removeValue=()=>{
  // KanganCounter(counter-1)
  if(counter<=0){
  console.log("STOP");
  return;  //to stop further execution
}
else{
  console.log("Clicked",counter);
  KanganCounter(counter-1)
}
}

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
