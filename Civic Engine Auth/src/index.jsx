import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  useSystemColorMode: false,  initialColorMode: 'light',
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
