import React from 'react';
import App from 'next/app';
import { Box, MosTheme } from '@woutsluiter/blocks';
import Head from '../components/Head';
import Page from '../components/Page';

declare module 'react' {
    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        jsx?: boolean;
        global?: boolean;
    }
}

class MyApp extends App {
    public render() {
        const { Component, pageProps } = this.props;

        return (
            <MosTheme>
                <Head />
                <Page>
                    <Component {...pageProps} />
                </Page>
            </MosTheme>
        );
    }
}

export default MyApp;
