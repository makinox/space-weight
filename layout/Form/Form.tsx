import { Dispatch, FormEvent, SetStateAction } from 'react';
import { FluidContainer } from '@makinox/makinox-ui';
import { useTranslation } from 'next-i18next';

import { PlanetObject, PLANETS } from '../../public/constants';
import { FormSection } from './Form.styles';

export default function Form({
  planet,
  weight,
  setWeight,
  setPlanet,
}: {
  planet: PlanetObject;
  weight: string;
  setWeight: Dispatch<SetStateAction<string>>;
  setPlanet: Dispatch<SetStateAction<PlanetObject>>;
}) {
  const { t } = useTranslation('common');

  function handleSubmit(element: FormEvent<HTMLFormElement>) {
    element.preventDefault();
    console.log({ weight, planet });
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
