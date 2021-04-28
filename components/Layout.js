import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ title, description, children }) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      {router.pathname === '/' && <h2>Hero component goes here</h2>}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
