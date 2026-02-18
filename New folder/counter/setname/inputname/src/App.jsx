import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name,setName] =useState("");

const setname=(e)=>{
setName(e.target.value)
}


    
  

  return (
    <>
      <div>
        <p>Take The Input name</p>
        <input type='text' placeholder='Enter your name' onChange={setname} value={name}></input>
        <h1>Hello{name}</h1>

      </div>
    </>
  )
}

export default App
