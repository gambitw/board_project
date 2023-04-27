import { AppProps} from 'next/app';
import {Header} from '../components/Header';

import '../styles/global.scss';
import {} from 'next-auth/react';


export default function MyApp({ Component, pageProps }: AppProps) {
   return(
    <>
    <Header />
    <Component {...pageProps} />
    </>
   )
  
}

