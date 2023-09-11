import React from 'react';

import Head from 'next/head';
import Header from '../components/layout/header';
import SideBarAdmin from '../components/layout/SideBar';
import SideBarEmployer from '../components/layout/employer/SideBar';
import Footer from '../components/layout/footer';
import { useRouter } from 'next/router';
import { ChakraProvider } from '@chakra-ui/react';

import '../public/static/css/style.css';
import '../public/static/css/nav_bar.css';
import '../public/static/css/home_page.css';
import '../public/static/css/unw_table.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const BACK_END_PORT = 'http://localhost:5000';
  return (
    <ChakraProvider>
      {router.pathname.includes('/admin') && <SideBarAdmin back_end_port={BACK_END_PORT} />}
      {router.pathname.includes('/employer') && <SideBarEmployer back_end_port={BACK_END_PORT} />}
      {/* {!router.pathname.includes('/admin') && <Header back_end_port={BACK_END_PORT} />} */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default MyApp;
