import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
} from "date-fns";

export const generateCalendar = (date) => {
  const start = startOfMonth(date);
  const end = endOfMonth(date);

  return eachDayOfInterval({ start, end });
};

export const formatMonth = (date) => {
  return format(date, "MMMM yyyy");
};