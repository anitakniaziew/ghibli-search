import React from 'react';

export const modes = {
  light: {
    name: 'light',
    background: '#fff',
    textColor: '#24292E',
    buttonBackground: '#24292E',
    buttonTextColor: '#fff',
  },
  dark: {
    name: 'dark',
    background: '#0D1117',
    textColor: '#C9D1D9',
    buttonBackground: '#fff',
    buttonTextColor: '#24292E',
  }
}

export const ModeContext = React.createContext(
  modes.light
)
