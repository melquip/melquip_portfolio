// #region Global Imports
import React from "react";
import App, { AppInitialProps, AppContext } from "next/app";
import { ThemeProvider } from "styled-components";
// #endregion Global Imports

// #region Local Imports
import { theme } from "@Definitions/Styled";
import { appWithTranslation } from "@Server/i18n";
import { AppWithStore } from "@Interfaces";
import { wrapper } from "@Redux";

import "@Static/css/main.scss";
// #endregion Local Imports

class WebApp extends App<AppWithStore> {
  static async getInitialProps({
    Component,
    ctx,
  }: AppContext): Promise<AppInitialProps> {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    // console.log(this.props)
    return (
      // <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      // </Provider>
    );
  }
}

export default wrapper.withRedux(appWithTranslation(WebApp));
