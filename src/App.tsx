import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { CounterProvider } from './contexts/CounterContext'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CounterProvider>
          <Router />
        </CounterProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
