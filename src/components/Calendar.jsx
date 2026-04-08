"use client";

import { useState } from "react";
import { generateCalendar, formatMonth } from "../utils/dateUtils";
import DayCell from "./DayCell";
import NotesPanel from "./NotesPanel";
import HeaderImage from "./HeaderImage";
import MonthNavigator from "./MonthNavigator";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const days = generateCalendar(currentDate);

  const handleSelect = (day) => {
    if (!startDate) {
      setStartDate(day);
    } else if (!endDate) {
      if (day < startDate) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    } else {
      setStartDate(day);
      setEndDate(null);
    }
  };

  const monthText = formatMonth(currentDate);

  return (
    <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-2 gap-6">

      {/* CALENDAR */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <HeaderImage 
          month={monthText} 
          monthIndex={currentDate.getMonth()} 
        />
        <MonthNavigator date={currentDate} setDate={setCurrentDate} />

        <div className="p-4">

          {/* Week Days */}
          <div className="grid grid-cols-7 text-center text-sm font-semibold text-gray-500 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, i) => (
              <DayCell
                key={i}
                day={day}
                startDate={startDate}
                endDate={endDate}
                onSelect={handleSelect}
                currentDate={currentDate}
              />
            ))}
          </div>
        </div>
      </div>

      {/* NOTES */}
      <NotesPanel keyName={monthText} />
    </div>
  );
}