import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const addCount=()=>{
    if(count< 20){
    setCount(count + 1)
    }
  }
  const removeCount =()=>{
   if(count>0){
     setCount(count-1)
   }
  }


  return (
    <>
    <div className='maindiv'>
     
      <h1>Tushar Kailas Dandavate | counter</h1>
      <p><h1>Counter value:{count}</h1></p>
      <button onClick={addCount} className='but1'>Add Count </button>
      <button onClick={removeCount} className='but1'>Remove Count </button>
      <p> This custom counter will not exceed the 20 and not subceed 0  </p>
    </div>
    </>
  )
}

export default App
