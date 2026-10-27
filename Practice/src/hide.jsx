import { useState } from 'react'

function Hide() {
  const [show, setShow] = useState(false)
  const toggle = () => {
    setShow(!show)
  }

  return (
    <>
      <button onClick={toggle}>{show ? 'hide' : 'show'} toggle message</button>
      {show && <p>this is the message for the show</p>}
    </>
  )
}

export default Hide
