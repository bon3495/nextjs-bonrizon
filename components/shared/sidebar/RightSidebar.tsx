'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';

import { getTopQuestions } from '@/actions/question';
import { getTopPopularTags } from '@/actions/tag';
import { SidebarWrapper } from '@/components/shared/sidebar';
import TagLink from '@/components/shared/TagLink';
import { ScrollArea } from '@/components/ui/scroll-area';
import { QUERY_KEYS } from '@/constants/query-keys';
import { ROUTES_NAME } from '@/constants/routes';

const ACCEPTED_SIDEBAR = [
  ROUTES_NAME.HOME,
  ROUTES_NAME.COMMUNITY,
  ROUTES_NAME.COLLECTIONS,
  ROUTES_NAME.TAGS,
] as string[];

const RightSidebar = () => {
  const pathname = usePathname();

  const isShow = ACCEPTED_SIDEBAR.includes(pathname);

  const topQuestions = useQuery({
    queryKey: [QUERY_KEYS.TOP_QUESTIONS],
    queryFn: () => getTopQuestions({ total: 10 }),
  });

  const topPopularTags = useQuery({
    queryKey: [QUERY_KEYS.TOP_POPULAR_TAGS],
    queryFn: () => getTopPopularTags({ total: 10 }),
  });

  return isShow ? (
    <SidebarWrapper className="right-0 border-l dark:border-background-lighter  max-xl:hidden">
      <ScrollArea className="flex flex-1 flex-col">
        <section className="flex flex-col px-6">
          <h3 className="mb-4 text-lg font-semibold">Top Questions</h3>
          <ul className="flex flex-col">
            {topQuestions?.data?.map((item) => (
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
            {Array.isArray(topPopularTags.data) &&
              topPopularTags.data.map((item) => (
                <li key={item._id} className="flex">
                  <TagLink
                    href={`${ROUTES_NAME.TAGS}/${item._id}`}
                    content={item.description}
                    isShowTooltip={!!item.description}
                  >
                    {item.name}
                  </TagLink>
                </li>
              ))}
          </ul>
        </section>
      </ScrollArea>
    </SidebarWrapper>
  ) : null;
};

export default RightSidebar;
