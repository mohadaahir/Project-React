import { useState } from 'react'

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false)

  const toggle = () => setIsOn(!isOn)

  return (
    <div>
      <p>The button is {isOn ? 'ON' : 'OFF'}</p>
      <button type="button" onClick={toggle}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}

export default ToggleButton
