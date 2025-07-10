import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"kangan",
    age:20
  }
  let myArr=[1,2,3,4,5]

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="chai aur code" />
    </>
  )
}

export default App
