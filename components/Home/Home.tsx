import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Head from 'next/head';

import { PlanetObject, PLANETS } from '../../public/constants';
import Navbar from '../../components/Navbar/Navbar';
import Answer from '../../layout/Answer/Answer';
import Hero from '../../layout/Hero/Hero';
import Form from '../../layout/Form/Form';

const Planet = dynamic(() => import('../../layout/Planet/Planet'), {
  ssr: false,
  loading: () => <div>...</div>,
});

const Home = ({ defaultPlanet = PLANETS[0] }) => {
  const [planet, setPlanet] = useState<PlanetObject>(defaultPlanet);
  const [weight, setWeight] = useState('');
  const { t } = useTranslation('common');

  return (
    <div>
      <Head>
        <title>
          Space weight - {t('head-description', { planet: `${t(planet.objectPrefix)} ${t(planet.objectName)}`, system: planet.objectPrefix })}
        </title>
        <meta
          name="description"
          content={t('head-description', { planet: `${t(planet.objectPrefix)} ${t(planet.objectName)}`, system: planet.objectPrefix })}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </Head>

      <main>
        <Navbar />
        <Hero planetInfo={planet} />
        <Form planet={planet} weight={weight} setPlanet={setPlanet} setWeight={setWeight} />
        <Answer planet={planet} weight={weight} />
        <Planet name={planet.objectValue} />
      </main>
    </div>
  );
};

export default Home;
