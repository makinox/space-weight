import { FluidContainer } from '@makinox/makinox-ui';
import { useTranslation } from 'next-i18next';

import { HeroSection } from './Hero.styles';
import { PlanetObject } from '../../public/constants';

export default function Hero({ planetInfo }: { planetInfo: PlanetObject }) {
  const { t } = useTranslation('common');
  return (
    <section className={`flex justify-center ${FluidContainer()} ${HeroSection()}`}>
      <h1>
        {t('head-description', {
          planet: `${t(planetInfo.objectPrefix)} ${t(planetInfo.objectName)}`,
          system: planetInfo.objectPrefix,
        })}
      </h1>
    </section>
  );
}
