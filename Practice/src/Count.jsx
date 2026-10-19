import {useState} from 'react'


function Count(){

    const [count, setCount] = useState(0)


const increase = () => {
  setCount(previousCount => previousCount + 1)
}

const decrease = () => {
  setCount(previousCount => previousCount - 1)
}
    return(
        <>
        
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <p> number clicked : {count}</p>
        </>
    )
}
export default Count