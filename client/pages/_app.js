import React from 'react';

import Head from 'next/head';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { ChakraProvider } from '@chakra-ui/react'

import '../public/static/css/style.css';
import '../public/static/css/test.css';

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider>
			<Head>
				<title>Uniwork</title>
				<meta charSet='utf-8' />
			</Head>
			<Header></Header>
			<Component {...pageProps} />
			<Footer></Footer>
		</ChakraProvider>
	);
}

export default MyApp;
