export function maxAgeForNext(minutesForRollover: number[] = [22]) {
  const currentMinute = new Date().getMinutes();
  const currentSecond = new Date().getSeconds();
  const nextMinute =
    minutesForRollover.find((m) => m > currentMinute) ??
    Math.min(...minutesForRollover) + 60;
  const maxAge = nextMinute * 60 - currentMinute * 60 - currentSecond;
  return maxAge;
}
