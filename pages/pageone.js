import React from 'react';
import Layout from '../lib/Layout'
import Link from 'next/link';
import Head from 'next/head';

export default () => (
    <Layout>
        <Head>
            <title>TyoBaskara nextjs-2</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="author" content="Prasetya Aji Baskara" />
            <link rel="shortcut icon" type="image/x-icon" href="../static/images/favicon.ico" />
            <meta name="robots" content="noindex, nofollow" />
        </Head>

        <div className="container container--wrap">
            <h1>Page 1</h1>
        </div>
    </Layout>
)