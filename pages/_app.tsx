// Packages
import React from 'react';
import { Provider } from 'react-redux';

// Definitions
import { AppProps } from 'next/app';

// Store
import store from '@/src/redux/';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
