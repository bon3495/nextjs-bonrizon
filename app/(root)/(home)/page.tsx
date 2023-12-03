import type { Metadata } from 'next';

import { getQuestions } from '@/actions/question';
import { baseMetadata, staticMetadata } from '@/config/meta';
import { HomeContent, HomeHeader } from '@/containers/home/components';

export const metadata: Metadata = {
  ...baseMetadata,
  ...staticMetadata.homePage,
};

const Home = async () => {
  const questionsList = await getQuestions({});

  return (
    <>
      <HomeHeader />
      <HomeContent questions={questionsList.data} />
    </>
  );
};

export default Home;
