import { FluidContainer } from '@makinox/makinox-ui';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import { PLANETS, PlanetType } from '../../public/constants';
import { FormSection } from './Form.styles';

export default function Form({
  planet,
  weight,
  setWeight,
  setPlanet,
}: {
  planet: string;
  weight: string;
  setWeight: Dispatch<SetStateAction<string>>;
  setPlanet: Dispatch<SetStateAction<PlanetType>>;
}) {
  function handleSubmit(element: FormEvent<HTMLFormElement>) {
    element.preventDefault();
    console.log({ weight, planet });
  }

  return (
    <section className={`${FluidContainer()} ${FormSection()}`}>
      <form onSubmit={handleSubmit} className="flex justify-evenly">
        <div className="flex flex-col items-center">
          <span>Selecciona uno</span>
          <select name="planet" defaultValue={planet} onChange={(e) => setPlanet(e.target.value as PlanetType)}>
            {PLANETS.map((planet) => (
              <option key={planet} value={planet}>
                {planet}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col items-center">
          <span>Ingresa tu peso</span>
          <input type="number" name="weight" onChange={(e) => setWeight(e.target.value)} />
        </div>
      </form>
    </section>
  );
}
