import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
// import { ThemeProvider } from '@material-ui/core/styles';
import { ThemeProvider } from 'styled-components';
import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
// import theme from '../theme';
import theme from '../src/theme';
import { useApollo } from '../lib/apolloClient';
import { ApolloProvider } from '@apollo/client';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const apolloClient = useApollo(pageProps);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <ApolloProvider client={apolloClient}>
              <Component {...pageProps} />
            </ApolloProvider>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
}
