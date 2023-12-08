import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ROUTES_NAME } from '@/constants/routes';
import { TagItemType } from '@/containers/tags/types';

interface TagCardProps {
  tag: TagItemType;
}

const TagCard = ({ tag }: TagCardProps) => {
  return (
    <li className="flex">
      <Link
        href={`${ROUTES_NAME.TAGS}/${tag._id}`}
        className="flex-1 rounded-md bg-background p-5 shadow-card-light dark:bg-background-lighter dark:shadow-card-dark"
      >
        <article className="flex flex-col">
          <TooltipProvider delayDuration={300}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge variant="tag-secondary" className="mb-3 w-fit">
                  {tag.name}
                </Badge>
              </TooltipTrigger>
              <TooltipPortal>
                <TooltipContent className="max-w-[300px]">
                  For questions about programming in ECMAScript (JavaScript/JS) and its different
                  dialects/implementations (except for ActionScript). Note that JavaScript is NOT Java. Include all tags
                  that are relevant to your question: e.g., [node.js], [jQuery], [JSON], [ReactJS],[angular],
                  [ember.js], [vue.js], [typescript], [svelte], etc.
                </TooltipContent>
              </TooltipPortal>
            </Tooltip>
          </TooltipProvider>

          {/* <p>{tag.description}</p> */}
          <p className="mb-3 line-clamp-4 text-sm text-muted-foreground">
            For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations
            (except for ActionScript). Note that JavaScript is NOT Java. Include all tags that are relevant to your
            question: e.g., [node.js], [jQuery], [JSON], [ReactJS],[angular], [ember.js], [vue.js], [typescript],
            [svelte], etc.
          </p>
          <p className="ml-auto flex items-center space-x-2 text-sm">
            <span>{tag.questions.length}</span>
            <span>Questions</span>
          </p>
        </article>
      </Link>
    </li>
  );
};

export default TagCard;
