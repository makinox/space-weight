import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PlanetObject, PLANETS } from '../../public/constants';
import Home from '../../components/Home/Home';

export async function getStaticPaths() {
  const paths = PLANETS.map((planet) => ({
    params: { id: planet.objectValueEs },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: PlanetObject['objectName'] } }) {
  return { props: { id: params.id, ...(await serverSideTranslations('es', ['common'])) } };
}

function Planet({ id }: { id: PlanetObject['objectName'] }) {
  const defaultPlanet = PLANETS.find((planet) => planet.objectValueEs === id);
  return <Home defaultPlanet={defaultPlanet} />;
}

export default Planet;
