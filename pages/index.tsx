import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar/Navbar';
import { PlanetType } from '../public/constants';
import Hero from '../layout/Hero/Hero';
import Form from '../layout/Form/Form';

const Planet = dynamic(() => import('../layout/Planet/Planet'), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

const Home: NextPage = () => {
  const [planet, setPlanet] = useState<PlanetType>('earth');
  const [weight, setWeight] = useState('');

  return (
    <div>
      <Head>
        <title>Space weight</title>
        <meta name="description" content="What is your weight in" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero planetName={planet} />
        <Form planet={planet} weight={weight} setPlanet={setPlanet} setWeight={setWeight} />
        <Planet name={planet} />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
