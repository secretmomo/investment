import dayjs from "dayjs";

export function dateTimeToNow(): string {
  return dayjs().format("YYYY-MM-DD HH:mm:ss");
}
