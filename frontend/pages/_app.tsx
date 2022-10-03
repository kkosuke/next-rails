import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/theme'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
