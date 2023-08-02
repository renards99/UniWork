import React from 'react';

import Head from 'next/head';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { ChakraProvider } from '@chakra-ui/react';

import '../public/static/css/style.css';
import '../public/static/css/nav_bar.css';
import '../public/static/css/home_page.css';
import '../public/static/css/paging.css';
import '../public/static/css/register.css';

function MyApp({ Component, pageProps }) {
	const BACK_END_PORT = 'http://localhost:5000';
	return (
		<ChakraProvider>
			<Header back_end_port={BACK_END_PORT} />
			<Component {...pageProps} />
			{/* <Footer /> */}
		</ChakraProvider>
	);
}

export default MyApp;
