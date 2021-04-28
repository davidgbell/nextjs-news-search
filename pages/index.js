import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BT React Test - David Bell</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      Hello World
    </div>
  );
}
