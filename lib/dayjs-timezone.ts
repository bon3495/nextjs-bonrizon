import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';
import objectSupport from 'dayjs/plugin/objectSupport';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

import { MONTH_DATE_YEAR } from '@/constants/date-time-format';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(objectSupport);

export const dayjsLanguage = (date?: string | Date | null) => {
  return dayjs(date);
};

export const formatDateToLocal = (date: string, formatType?: string) =>
  dayjsLanguage(date).format(formatType || MONTH_DATE_YEAR);
