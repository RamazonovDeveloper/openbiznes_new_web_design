import '../styles/globals.css'
import { AuthProvider } from '../context/authContext';
import AuthGuard from '../components/auth/AuthGuard'
import Head from 'next/head'
import CompanyLayout from '../layouts/CompanyLayout';

function MyApp({ Component, pageProps }) {
  console.log(' ====> ', Component.getLayout);
  const getLayout = Component.getLayout ?? (page => <CompanyLayout>{page}</CompanyLayout>)

  return <>
    <Head>
      <title>Open Banking - Единый пользовательский интерфейс для всех банков</title>
      <meta name="description" content="Open Banking – это омниканальная платформа дистанционного банковского обслуживания юридических лиц и индивидуальных предпринимателей с доступом к услугам разных банков через единую точку входа" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    
    <AuthProvider>
      <AuthGuard>
          {getLayout(<Component {...pageProps} />)}
      </AuthGuard>
    </AuthProvider>
  </>
  

}

export default MyApp
