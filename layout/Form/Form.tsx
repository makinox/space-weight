import { Dispatch, FormEvent, SetStateAction } from 'react';
import { FluidContainer } from '@makinox/makinox-ui';
import { useTranslation } from 'next-i18next';

import { PlanetObject, PLANETS } from '../../public/constants';
import { FormSection } from './Form.styles';
import { useRouter } from 'next/router';

export default function Form({
  planet,
  setWeight,
  setPlanet,
}: {
  planet: PlanetObject;
  weight: string;
  setWeight: Dispatch<SetStateAction<string>>;
  setPlanet: Dispatch<SetStateAction<PlanetObject>>;
}) {
  const { t } = useTranslation('common');
  const router = useRouter();

  function handleSubmit(element: FormEvent<HTMLFormElement>) {
    element.preventDefault();
  }

  return (
    <section className={`${FluidContainer()} ${FormSection()}`}>
      <form onSubmit={handleSubmit} className="flex justify-evenly">
        <div className="flex flex-col items-center">
          <span>{t('form-planets')}</span>
          <select
            name="planet"
            defaultValue={t(planet.objectName) as string}
            onChange={(e) => {
              const planetIndex = PLANETS.findIndex((elm) => elm.objectValue === e.target.value);
              router.push(`/${t('object-prefix0')}/${t(PLANETS[planetIndex].objectName)}`);
              setPlanet(PLANETS[planetIndex]);
            }}
          >
            {PLANETS.map((plt) => (
              <option key={plt.objectValue} value={plt.objectValue}>
                {t(plt.objectName)}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center">
          <span>{t('form-weight')}</span>
          <input type="number" name="weight" onChange={(e) => setWeight(e.target.value)} />
        </div>
      </form>
    </section>
  );
}
