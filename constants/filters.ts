import { OptionProps } from '@/types/global';

export const ANSWER_FILTERS: OptionProps[] = [
  { label: 'Highest Upvotes', value: 'highestUpvotes' },
  { label: 'Lowest Upvotes', value: 'lowestUpvotes' },
  { label: 'Most Recent', value: 'recent' },
  { label: 'Oldest', value: 'old' },
];

export const USER_FILTERS: OptionProps[] = [
  { label: 'New Users', value: 'new_users' },
  { label: 'Old Users', value: 'old_users' },
  { label: 'Top Contributors', value: 'top_contributors' },
];

export const QUESTION_FILTERS: OptionProps[] = [
  { label: 'Most Recent', value: 'most_recent' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'Most Voted', value: 'most_voted' },
  { label: 'Most Viewed', value: 'most_viewed' },
  { label: 'Most Answered', value: 'most_answered' },
];

export const TAG_FILTERS: OptionProps[] = [
  { label: 'Popular', value: 'popular' },
  { label: 'Recent', value: 'recent' },
  { label: 'Name', value: 'name' },
  { label: 'Old', value: 'old' },
];

export const HOME_PAGE_FILTERS: OptionProps[] = [
  { label: 'Newest', value: 'newest' },
  { label: 'Recommended', value: 'recommended' },
  { label: 'Frequent', value: 'frequent' },
  { label: 'Unanswered', value: 'unanswered' },
];

export const GLOBAL_SEARCH_FILTERS: OptionProps[] = [
  { label: 'Question', value: 'question' },
  { label: 'Answer', value: 'answer' },
  { label: 'User', value: 'user' },
  { label: 'Tag', value: 'tag' },
];
