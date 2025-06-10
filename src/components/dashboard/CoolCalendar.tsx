"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getMonthMatrix(year: number, month: number) {
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInCurrentMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const matrix = [];
  let day = 1;
  let nextMonthDay = 1;

  for (let week = 0; week < 5; week++) { // ✅ Only 5 weeks (rows)
    const row = [];

    for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
      const cellIndex = week * 7 + dayOfWeek;

      if (week === 0 && dayOfWeek < firstDayOfMonth) {
        // Previous month
        row.push({
          date: daysInPrevMonth - (firstDayOfMonth - dayOfWeek - 1),
          currentMonth: false,
        });
      } else if (day <= daysInCurrentMonth) {
        // Current month
        row.push({
          date: day,
          currentMonth: true,
        });
        day++;
      } else {
        // Next month
        row.push({
          date: nextMonthDay,
          currentMonth: false,
        });
        nextMonthDay++;
      }
    }

    matrix.push(row);
  }

  return matrix;
}

export default function CoolCalendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const todayDate = today.getDate();
  const matrix = getMonthMatrix(currentYear, currentMonth);
  const monthName = new Date(currentYear, currentMonth).toLocaleString("default", {
    month: "long",
  });

  const goToPrevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((y) => y - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const goToNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((y) => y + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Header with Lucide icons */}
      <div className="flex items-center justify-between">
        <button
          onClick={goToPrevMonth}
          className="text-sm p-2 rounded-full hover:bg-slate-200 transition"
        >
          <ChevronLeft className="w-5 h-5 text-slate-700" />
        </button>
        <span className="text-lg font-semibold text-slate-700">
          {monthName} {currentYear}
        </span>
        <button
          onClick={goToNextMonth}
          className="text-sm p-2 rounded-full hover:bg-slate-200 transition"
        >
          <ChevronRight className="w-5 h-5 text-slate-700" />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-slate-500">
        {WEEKDAYS.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {matrix.flat().map((cell, i) => {
          const isToday =
            cell.currentMonth &&
            currentYear === today.getFullYear() &&
            currentMonth === today.getMonth() &&
            cell.date === todayDate;

          return (
            <div
              key={i}
              className={`flex items-center justify-center p-3 h-16 rounded-xl border-2 shadow-sm text-sm sm:text-base select-none transition-all duration-200 cursor-pointer
              ${
                isToday
                  ? "bg-blue-100 text-blue-800 font-semibold border-blue-300 hover:border-blue-400"
                  : cell.currentMonth
                  ? "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  : "bg-slate-50 text-slate-400 border-slate-100 hover:bg-slate-100"
              }`}
            >
              {cell.date}
            </div>
          );
        })}
      </div>
    </div>
  );
}
