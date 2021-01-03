import React from 'react'

const ModeToggleButton = ({toggleMode, currentMode}) => {
  return <button onClick={toggleMode}>
    Switch to {currentMode.name === 'light' ? 'dark' : 'light'} mode
  </button>
}

export default ModeToggleButton
