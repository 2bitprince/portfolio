import { Theme } from '@radix-ui/themes';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (
    <Theme appearance="dark">
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp
