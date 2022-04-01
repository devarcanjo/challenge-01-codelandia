import { ThemeProvider } from 'styled-components'
import Home from './Pages/Home'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}

export default App
