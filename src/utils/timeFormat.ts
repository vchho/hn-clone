import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

export const timeFormatter = (timestamp: number) => {
  const now = dayjs();
  const then = dayjs.unix(timestamp);

  const diff = dayjs.duration(now.diff(then));

  if (diff.years() > 1) {
    return `${diff.years()} years ago`;
  }

  if (diff.months() > 1) {
    return `${diff.months()} months ago`;
  }

  if (diff.days() > 1) {
    return `${diff.days()} days ago`;
  }

  if (diff.hours() > 1) {
    return `${diff.hours()} hours ago`;
  }

  if (diff.minutes() > 1) {
    return `${diff.minutes()} minutes ago`;
  }

  return `${diff.seconds()} seconds ago`;
};
