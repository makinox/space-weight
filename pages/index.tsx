import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Home from '../components/Home/Home';

const App = () => <Home />;

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default App;
