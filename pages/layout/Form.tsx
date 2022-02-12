import { FormEvent } from 'react';
import { useInputValue } from '../../hooks/useInputValue';

export default function Form() {
  const WeigthInput = useInputValue({});

  function handleSubmit(element: FormEvent<HTMLFormElement>) {
    element.preventDefault();
    const target = element.target as typeof element.target & {
      weight: { value: string };
      planet: { value: string };
    };
    const weight = target.weight.value;
    const planet = target.planet.value;
    console.log({ weight, planet });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span>Tu peso en la</span>
        <select name="planet">
          <option value="tierra">tierra</option>
          <option value="luna">luna</option>
          <option value="marte">marte</option>
        </select>
      </div>
      <div>
        <span>peso</span>
        <input type="text" name="weight" />
      </div>
    </form>
  );
}
