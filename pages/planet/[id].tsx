import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PlanetObject, PLANETS } from '../../public/constants';
import Home from '../../components/Home/Home';

export async function getStaticPaths() {
  const paths = PLANETS.map((planet) => ({
    params: { id: planet.objectValue },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }: { params: { id: PlanetObject['objectName'] }; locale: string }) {
  console.log({ params });
  return { props: { id: params.id, ...(await serverSideTranslations(locale, ['common'])) } };
}

function Planet({ id }: { id: PlanetObject['objectName'] }) {
  const defaultPlanet = PLANETS.find((planet) => planet.objectName === id);
  return <Home defaultPlanet={defaultPlanet} />;
}

export default Planet;
