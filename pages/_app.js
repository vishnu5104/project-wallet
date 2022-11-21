import First from '../components/First'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
  <First>
    <Component {...pageProps} />
  </First>
)

export default MyApp
