import Link from 'next/link';

import { SidebarWrapper } from '@/components/shared/sidebar';
import TagLink from '@/components/shared/TagLink';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ROUTES_NAME } from '@/constants/routes';

const TOP_QUESTIONS = [
  {
    title: 'What is Next.js?',
    _id: 1,
  },
  {
    title: ' Main Features',
    _id: 2,
  },
  {
    title: 'How to Use These Docs',
    _id: 3,
  },
  {
    title: 'App Router vs Pages Router',
    _id: 4,
  },
  {
    title: 'Pre-Requisite Knowledge',
    _id: 5,
  },
  {
    title: 'Accessibility',
    _id: 6,
  },
  {
    title: 'Join our Community',
    _id: 7,
  },
  {
    title: 'What is the simplest way to declare an array in javascript, having elements, 1, 2, 3....n',
    _id: 8,
  },
  {
    title: 'Generate numbers from 1 to 100 in an array in a way no number is repeated [duplicate]',
    _id: 9,
  },
  {
    title: 'How to initialize an array of the first ten integers briefly? [duplicate]',
    _id: 10,
  },
];

const POPULAR_TAGS = [
  {
    _id: 1,
    name: 'Javascript',
    totalQuestions: 250,
    content:
      'For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations (except for ActionScript)',
  },
  {
    _id: 2,
    name: 'Next.js',
    totalQuestions: 157,
    content: '',
  },
  {
    _id: 3,
    name: 'Typescript',
    totalQuestions: 89,
    content: '',
  },
  {
    _id: 4,
    name: 'Vite',
    totalQuestions: 8,
    content: '',
  },
  {
    _id: 5,
    name: 'Redux',
    totalQuestions: 11,
    content: '',
  },
  {
    _id: 6,
    name: 'Tailwindcss',
    totalQuestions: 1587,
    content: '',
  },
  {
    _id: 7,
    name: 'React',
    totalQuestions: 35671,
    content: '',
  },
];

const RightSidebar = () => {
  return (
    <SidebarWrapper className="right-0 border-l dark:border-background-lighter  max-xl:hidden">
      <ScrollArea className="flex flex-1 flex-col">
        <section className="flex flex-col px-6">
          <h3 className="mb-4 text-lg font-semibold">Top Questions</h3>
          <ul className="flex flex-col">
            {TOP_QUESTIONS.map((item) => (
              <li key={item._id} className="flex py-2">
                <Link
                  href={`${ROUTES_NAME.QUESTIONS}/${item._id}`}
                  className="line-clamp-2 text-sm transition-all hover:translate-x-1 hover:text-contrast-medium hover:underline dark:hover:text-primary-light"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-10 px-6">
          <h3 className="mb-4 text-lg font-semibold">Popular Tags</h3>
          <ul className="inline-flex flex-wrap gap-2">
            {POPULAR_TAGS.map((item) => (
              <li key={item._id} className="flex">
                {/* <Link
                  href={`${ROUTES_NAME.TAGS}/${item._id}`}
                  className="text-sm transition-all hover:text-contrast-medium hover:underline dark:hover:text-primary-light"
                >
                  <Badge variant="tag">{item.name}</Badge>
                </Link> */}
                <TagLink href={`${ROUTES_NAME.TAGS}/${item._id}`} content={item.content} isShowTooltip={!!item.content}>
                  {item.name}
                </TagLink>
              </li>
            ))}
          </ul>
        </section>
      </ScrollArea>
    </SidebarWrapper>
  );
};

export default RightSidebar;
