import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const elapsedTimeInMilliseconds = now.getTime() - createdAt.getTime();

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = 60 * minute;
  const day = 24 * hour;
  const week = 7 * day;
  const month = 30 * day;
  const year = 365 * day;

  if (elapsedTimeInMilliseconds < minute) {
    const seconds = Math.floor(elapsedTimeInMilliseconds / 1000);
    return `${seconds} ${seconds === 1 ? 'second' : 'seconds'} ago`;
  } else if (elapsedTimeInMilliseconds < hour) {
    const minutes = Math.floor(elapsedTimeInMilliseconds / minute);
    return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
  } else if (elapsedTimeInMilliseconds < day) {
    const hours = Math.floor(elapsedTimeInMilliseconds / hour);
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  } else if (elapsedTimeInMilliseconds < week) {
    const days = Math.floor(elapsedTimeInMilliseconds / day);
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else if (elapsedTimeInMilliseconds < month) {
    const weeks = Math.floor(elapsedTimeInMilliseconds / week);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (elapsedTimeInMilliseconds < year) {
    const months = Math.floor(elapsedTimeInMilliseconds / month);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    const years = Math.floor(elapsedTimeInMilliseconds / year);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
};

export function formatNumberWithExtension(num: number): string {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + 'B';
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + 'M';
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + 'K';
  } else {
    return num.toString();
  }
}

export function formatNumberWithDot(num: number): string {
  // Use regular expression to add commas as thousands separators
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
