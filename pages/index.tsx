import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar/Navbar';
import { PlanetObject, PLANETS } from '../public/constants';
import Answer from '../layout/Answer/Answer';
import Hero from '../layout/Hero/Hero';
import Form from '../layout/Form/Form';

const Planet = dynamic(() => import('../layout/Planet/Planet'), {
  ssr: false,
  loading: () => <div>...</div>,
});

const Home: NextPage = () => {
  const [planet, setPlanet] = useState<PlanetObject>(PLANETS[0]);
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
      </Head>

      <main>
        <Navbar />
        <Hero planetInfo={planet} />
        <Form planet={planet} weight={weight} setPlanet={setPlanet} setWeight={setWeight} />
        <Answer planet={planet} weight={weight} />
        <Planet name={planet.objectValue} />
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;
