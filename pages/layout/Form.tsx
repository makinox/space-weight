import { Dispatch, FormEvent, SetStateAction } from 'react';
import { PLANETS, PlanetType } from '../constants';

export default function Form({
  formData,
  setSetFormData,
}: {
  formData: {
    planet: PlanetType;
    weight: string;
  };
  setSetFormData: Dispatch<
    SetStateAction<{
      planet: PlanetType;
      weight: string;
    }>
  >;
}) {
  function handleSubmit(element: FormEvent<HTMLFormElement>) {
    element.preventDefault();
    const target = element.target as typeof element.target & {
      weight: { value: string };
      planet: { value: PlanetType };
    };
    const weight = target.weight?.value || '';
    const planet = target.planet.value;
    setSetFormData({ weight, planet });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span>Tu peso en la</span>
        <select name="planet" defaultValue={formData.planet}>
          {PLANETS.map((planet) => (
            <option key={planet} value={planet}>
              {planet}
            </option>
          ))}
        </select>
      </div>
      <div>
        <span>peso</span>
        <input type="number" name="weight" />
      </div>
    </form>
  );
}
