import App, {Container} from 'next/app'
import React from 'react'

import { AppMainContextProvider, } from '../app/context'

import LayoutDefault from '../app/layouts/LayoutDefault';
import "../app/sass/global_style.scss";

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  render () {
    const {Component, pageProps} = this.props
    return <Container>
        <AppMainContextProvider>
            <LayoutDefault>
                <Component {...pageProps} />
            </LayoutDefault>
        </AppMainContextProvider>
    </Container>
  }
}