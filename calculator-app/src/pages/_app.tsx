import { CalcContextProvider } from '../contexts/CalcContext';
import { ThemeContextProvider } from '../contexts/ThemeContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <CalcContextProvider>
      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </CalcContextProvider>
  )
}

export default MyApp
