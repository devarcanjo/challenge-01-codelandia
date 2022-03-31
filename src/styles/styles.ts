import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      purple: string
      gradient: string
      white: string
      white200: string
      gray: string
      gray800: string
    }
    fonts: {
      LexendDeca: string
      Inter: string
    }
  }
}
