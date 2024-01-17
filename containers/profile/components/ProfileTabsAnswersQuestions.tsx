import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserDataType } from '@/containers/authentication/types';
import { ProfileAnswers, ProfileBlockWrap, ProfileQuestions } from '@/containers/profile';

const TAB_VALUES = {
  // ALL: 'all',
  QUESTIONS: 'questions',
  ANSWERS: 'answers',
};

interface ComponentProps {
  className?: string;
  user: UserDataType;
}

const ProfileTabsAnswersQuestions = ({ user, className }: ComponentProps) => {
  return (
    <ProfileBlockWrap className={className}>
      <Tabs defaultValue={TAB_VALUES.QUESTIONS} className="flex flex-col">
        <div className="flex flex-1 items-center justify-between">
          <h3 className="text-base font-semibold">Top Posts</h3>
          <TabsList className="ml-auto gap-x-2">
            <TabsTrigger value={TAB_VALUES.QUESTIONS}>Questions</TabsTrigger>
            <TabsTrigger value={TAB_VALUES.ANSWERS}>Answered</TabsTrigger>
          </TabsList>
        </div>
        <div>
          <TabsContent value={TAB_VALUES.QUESTIONS}>
            <ProfileQuestions userId={user._id} clerkId={user.clerkId} />
          </TabsContent>
          <TabsContent value={TAB_VALUES.ANSWERS}>
            <ProfileAnswers userId={user._id} clerkId={user.clerkId} />
          </TabsContent>
        </div>
      </Tabs>
    </ProfileBlockWrap>
  );
};

export default ProfileTabsAnswersQuestions;
