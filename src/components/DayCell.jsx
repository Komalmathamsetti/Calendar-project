import { isSameDay, isWithinInterval, isSameMonth } from "date-fns";

export default function DayCell({
  day,
  startDate,
  endDate,
  onSelect,
  currentDate,
}) {
  const isSelected =
    startDate &&
    endDate &&
    isWithinInterval(day, { start: startDate, end: endDate });

  const isStart = startDate && isSameDay(day, startDate);
  const isEnd = endDate && isSameDay(day, endDate);

  const isCurrentMonth = isSameMonth(day, currentDate);

  return (
  <div
    onClick={() => onSelect(day)}
    className={`
      h-12 flex items-center justify-center rounded-lg cursor-pointer
      transition-all duration-200 text-sm font-semibold

      ${
        isStart || isEnd
          ? "bg-blue-500 text-white"
          : isSelected
          ? "bg-blue-200 text-gray-900"
          : "bg-white text-gray-800"
      }

      hover:bg-blue-300 hover:text-black
    `}
  >
    {day.getDate()}
  </div>
);
}