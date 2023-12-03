import { Metadata } from 'next';

export const baseMetadata: Metadata = {
  title: 'Bonrizon',
  description:
    'A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate withe developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
  icons: {
    icon: '/assets/images/favicon.ico',
    shortcut: '/assets/images/favicon-16x16.png',
    apple: '/assets/images/apple-touch-icon.png',
  },
};

export const staticMetadata = {
  signIn: {
    title: 'Sign In | Bonrizon',
    description:
      'Sign in to Bonrizon, a community-driven platform for asking and answering programming questions. Join a global community of developers to get help, share knowledge, and collaborate on topics in web development, mobile app development, algorithms, data structures, and more.',
  } satisfies Metadata,
  signUp: {
    title: 'Sign Up | Bonrizon',
    description:
      'Join Bonrizon, the community-driven platform for programming enthusiasts. Sign up to ask and answer coding questions, connect with developers worldwide, and explore a variety of topics in web development, mobile app development, algorithms, data structures, and more. Start your coding journey with Bonrizon!',
  } satisfies Metadata,
  homePage: {
    title: 'Home | Bonrizon',
    description:
      'Discover a wealth of programming knowledge on Bonrizon. Explore questions and answers on web development, mobile app development, algorithms, data structures, and more. Use powerful filters, efficient pagination, and a robust search to find solutions to your coding challenges. Engage with top-rated questions and contribute to the dynamic programming community at Bonrizon.',
  } satisfies Metadata,
  askQuestion: {
    title: 'Ask a Question | Bonrizon',
    description:
      'Pose your programming questions on Bonrizon, a community-driven platform. Seek assistance, share your knowledge, and collaborate with developers worldwide. Explore topics in web development, mobile app development, algorithms, data structures, and more.',
  } satisfies Metadata,
  community: {
    title: 'Community | Bonrizon',
    description:
      "Join the Bonrizon community, a collaborative hub for programmers worldwide. Get involved in asking and answering programming questions, share your expertise, and collaborate with developers passionate about web development, mobile app development, algorithms, data structures, and more. Together, let's build a thriving knowledge-sharing community at Bonrizon.",
  } satisfies Metadata,
};
