import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserDataType } from '@/containers/authentication/types';
import { ProfileAllPosts, ProfileAnswers, ProfileBlockWrap, ProfileQuestions } from '@/containers/profile';

const TAB_VALUES = {
  ALL: 'all',
  QUESTIONS: 'questions',
  ANSWERS: 'answers',
};

interface ComponentProps {
  className?: string;
  user: UserDataType;
}

const ProfileTabsAnswersQuestions = ({ className }: ComponentProps) => {
  return (
    <ProfileBlockWrap className={className} title="Top Posts">
      <Tabs defaultValue={TAB_VALUES.ALL} className="flex flex-col">
        <div className="flex flex-1 items-center justify-between">
          <p>View all questions and answers</p>
          <TabsList className="gap-x-2">
            <TabsTrigger value={TAB_VALUES.ALL}>All</TabsTrigger>
            <TabsTrigger value={TAB_VALUES.QUESTIONS}>Top Posts</TabsTrigger>
            <TabsTrigger value={TAB_VALUES.ANSWERS}>Answered</TabsTrigger>
          </TabsList>
        </div>
        <div>
          <TabsContent value={TAB_VALUES.ALL}>
            <ProfileAllPosts />
          </TabsContent>
          <TabsContent value={TAB_VALUES.QUESTIONS}>
            <ProfileQuestions />
          </TabsContent>
          <TabsContent value={TAB_VALUES.ANSWERS}>
            <ProfileAnswers />
          </TabsContent>
        </div>
      </Tabs>
    </ProfileBlockWrap>
  );
};

export default ProfileTabsAnswersQuestions;
