import App, { Container } from 'next/app';
import React from 'react';
import SiteFurniture from '../sitefurniture';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
                <Container>
                    <SiteFurniture>
                        <Component {...pageProps} />
                    </SiteFurniture>
                </Container>
        )
    }
}



