import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';
import { ROUTES_NAME } from '@/constants/routes';

const AskQuestionButton = () => {
  return (
    <Link href={ROUTES_NAME.ASK_QUESTION} className={buttonVariants({ variant: 'primary', className: 'w-fit' })}>
      Ask a Question
    </Link>
  );
};

export default AskQuestionButton;
