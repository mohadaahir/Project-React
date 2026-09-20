import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handaleIncrease=()=>setCount(count+1)
const handaleDecrease=()=>{
  if(count>0)setCount(count-1)

}

  return (
<div>
  <h1>count {count}</h1>
  <button style={{background:"black"}} onClick={handaleIncrease} >increament</button>
  <button style={{background:"black "}}  disabled={!count} onClick={handaleDecrease}>decreament</button>
</div>
  )
}

export default App
