import dayjs from "dayjs";

export function dateTimeToNow(): string {
  return dayjs().format("YYYY-MM-DD HH:mm:ss");
}

export function dateToNow(): string {
  return dayjs().format("YYYY-MM-DD");
}
