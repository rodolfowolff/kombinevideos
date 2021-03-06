import React from 'react';
import { Provider } from 'next-auth/client';
import { Router } from 'next/dist/client/router';
import Head from 'next/head';
import MyThemeProvider from 'src/components/MyThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { SettingsProvider } from 'src/contexts/SettingsContext';

NProgress.configure({
  showSpinner: false,
  trickleRate: 0.1,
  trickleSpeed: 300,
});

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
  // scrollTo();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
  // scrollTo();
});

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <Provider session={ pageProps.session }>
        <SettingsProvider>
          <MyThemeProvider>
            <CssBaseline />
            <Component { ...pageProps } />
          </MyThemeProvider>
        </SettingsProvider>
      </Provider>

      <style global jsx>
        { `
          #nprogress {
            position: relative;
            z-index: 9999999;
          }
          #nprogress .bar {
            background: #f44336 !important;
            height: 4px;
          }
        `}
      </style>
    </React.Fragment>
  );
}
