import Head from 'next/head';
import type { NextPage } from 'next';

import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Koreats! - Meal Kit Delivery</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
    </div>
  );
};

export default Home;
