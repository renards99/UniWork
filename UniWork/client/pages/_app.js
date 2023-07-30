import React from 'react';

import Head from 'next/head';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

import '../public/static/css/style.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Uniwork</title>
				<meta charSet='utf-8' />
			</Head>
			<Header></Header>
			<Component {...pageProps} />
			<Footer></Footer>
		</>
	);
}

export default MyApp;
