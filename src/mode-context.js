import React from 'react';

export const modes = {
  light: {
    name: 'light',
    background: '#fff',
    textColor: '#24292E'
  },
  dark: {
    name: 'dark',
    background: '#0D1117',
    textColor: '#C9D1D9'
  }
}

export const ModeContext = React.createContext(
  modes.light
)
