import App, { Container } from 'next/app';
import React from 'react';
import SiteFurniture from '../sitefurniture';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';

class MyApp extends App {
    render() {
        const { Component, pageProps, reduxStore } = this.props;
        return <Container>
            <Provider store={reduxStore}>
                <SiteFurniture>
                    <Component {...pageProps} />
                </SiteFurniture>
            </Provider>
        </Container>
    }
}

export default withReduxStore(MyApp);

