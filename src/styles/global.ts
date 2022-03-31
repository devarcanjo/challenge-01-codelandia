import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: currentColor;
    }

    body {
      background: ${theme.colors.background};
    }
  `}
`

export default GlobalStyle
