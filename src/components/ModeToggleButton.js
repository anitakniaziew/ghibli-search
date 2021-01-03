import React, { useContext } from 'react'
import { ModeContext } from '../mode-context'

const ModeToggleButton = ({toggleMode}) => {
  const mode = useContext(ModeContext);
  return <button onClick={toggleMode} style={{ backgroundColor: mode.buttonBackground, color: mode.buttonTextColor}}>
    Switch to {mode.name} mode
  </button>
}

export default ModeToggleButton
