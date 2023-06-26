import '@/styles/globals.css';
import Layout from '@/components/Layout';
import { Suspense } from 'react';

import styles from "../styles/Home.module.css"

function Loading() {
  return (
    <div className={styles.centralize}>
      <h1>Carregando......</h1>
      <img src="https://i.imgur.com/AqFk9Ux.gif" srcSet="https://i.imgur.com/AqFk9Ux.gif"></img>
    </div>
  );
}


export default function App({ Component, pageProps }) {
  return ( <Layout>
    <Suspense fallback={<Loading />}>
      <Component {...pageProps} />
    </Suspense>
      
    
    
    
   </Layout>
      )
}
