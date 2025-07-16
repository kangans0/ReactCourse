import { useCallback, useState, useEffect,useRef } from 'react'

function App() {
  const [length, setLength]=useState(8)
  const [numberAllowed, setNumberAllowed]=useState(false);
  const [charAllowed, setcharAllowed]=useState(false);
  const [password, setpassword]= useState("")

  // useRef hook
  const passwordRef =useRef(null) 

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

  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])

    useEffect(()=>{
      passwordGenerator();
    },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center mb-2 my-3 text-lg font-medium">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-amber-100">
        <input 
          type="text"
          value={password}
          className="outline-none w-full py-2 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={ (e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={ ()=>{setNumberAllowed((prev)=>!prev)}}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id="charInput"
          onChange={()=>{setcharAllowed((prev)=>!prev)}}          
          />
          <label htmlFor='charInput'>Characters</label>
        </div>
      </div>
    </div>
  </div>
)
}


export default App
