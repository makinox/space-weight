import { appWithTranslation } from 'next-i18next';
import '@makinox/makinox-ui/dist/index.css';
import type { AppProps } from 'next/app';

import '../styles/globals.css';
import '../styles/colors.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
