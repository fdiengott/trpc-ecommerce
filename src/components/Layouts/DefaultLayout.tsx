import Head from 'next/head';
import type { ReactNode } from 'react';
import Nav from '../Nav/Nav';

type DefaultLayoutProps = { children: ReactNode };

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <>
            <Head>
                <title>e-commerce site</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            <main className="h-screen">{children}</main>
        </>
    );
};
