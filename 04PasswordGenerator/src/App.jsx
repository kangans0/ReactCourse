import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength]=useState(8)
  const [numberAllowed, setNumberAllowed]=useState(false);
  const [charAllowed, setcharAllowed]=useState(false);
  const [password, setpassword]= useState("")

  const passwordGenerator= useCallback(()=>{
    let pass=""
    let str="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz"

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-_=+[]{}~`";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random()* str.length+1)
      pass+= str.charAt(char)

      setpassword(pass)
      
    }
  },[length,numberAllowed,charAllowed,setpassword])


  return (
    <>
     fde
    </>
  )
}

export default App
