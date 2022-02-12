import { FluidContainer } from '@makinox/makinox-ui';

import { HeroSection } from './Hero.styles';
import { PlanetType } from '../../constants';

export default function Hero({ planetName }: { planetName: PlanetType }) {
  return (
    <section className={`flex justify-center ${FluidContainer()} ${HeroSection()}`}>
      <h1>Descubre cuanto pesas en el planeta {planetName}</h1>
    </section>
  );
}
