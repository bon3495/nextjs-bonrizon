import { OptionProps } from '@/types/global';

export const ANSWER_FILTERS: OptionProps[] = [
  { label: 'Highest Upvotes', value: 'highestupvotes' },
  { label: 'Lowest Upvotes', value: 'lowestupvotes' },
  { label: 'Most Recent', value: 'recent' },
  { label: 'Oldest', value: 'old' },
];

export const USER_FILTERS: OptionProps[] = [
  { label: 'Top Contributors', value: 'topcontributors' },
  { label: 'New Users', value: 'newusers' },
  { label: 'Old Users', value: 'oldusers' },
];

export const QUESTION_FILTERS: OptionProps[] = [
  { label: 'Most Recent', value: 'mostrecent' },
  { label: 'Oldest', value: 'oldest' },
  { label: 'Most Voted', value: 'mostvoted' },
  { label: 'Most Viewed', value: 'mostviewed' },
  { label: 'Most Answered', value: 'mostanswered' },
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
