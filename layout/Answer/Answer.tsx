import { useTranslation } from 'next-i18next';

import { PlanetObject } from '../../public/constants';
import { AnswerArticle } from './Answer.styled';

export default function Answer({ planet, weight }: { planet: PlanetObject; weight: string }) {
  const { t } = useTranslation('common');

  console.log(parseInt(weight, 10));
  console.log(planet);

  const RenderAnswer = () => {
    if (!weight.length) {
      return <></>;
    }
    if (planet.objectValue === 'sun') {
      return (
        <article className={`flex justify-center ${AnswerArticle()}`}>
          <h2>{t('form-sun')}</h2>
        </article>
      );
    }

    return (
      <article className={`flex justify-center ${AnswerArticle()}`}>
        <h2>{t('form-answer', { answer: (parseInt(weight, 10) * planet.objectFactor).toFixed(2) })}</h2>
      </article>
    );
  };
  return <RenderAnswer />;
}
