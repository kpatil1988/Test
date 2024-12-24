'use client'; // Enable client-side rendering for the component

import { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, isSameMonth, isSameDay } from 'date-fns';

const Calendar = () => {
  // Define the state types
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years: number[] = Array.from({ length: 21 }, (_, i) => new Date().getFullYear() - 10 + i); // Range: currentYear ±10

  // Handle month change
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.target.value, 10);
    setCurrentMonth(new Date(currentMonth.getFullYear(), newMonth));
  };

  // Handle year change
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newYear = parseInt(e.target.value, 10);
    setCurrentMonth(new Date(newYear, currentMonth.getMonth()));
  };

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="text-lg font-bold">
        &lt;
      </button>
      <div className="flex items-center space-x-2">
        {/* Month Selector */}
        <select
          value={currentMonth.getMonth()}
          onChange={handleMonthChange}
          className="border p-1 rounded text-sm"
        >
          {months.map((month, idx) => (
            <option key={idx} value={idx}>
              {month}
            </option>
          ))}
        </select>

        {/* Year Selector */}
        <select
          value={currentMonth.getFullYear()}
          onChange={handleYearChange}
          className="border p-1 rounded text-sm"
        >
          {years.map((year, idx) => (
            <option key={idx} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="text-lg font-bold">
        &gt;
      </button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const start = startOfWeek(new Date());
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-sm font-medium text-center text-gray-500">
          {format(addDays(start, i), 'E')}
        </div>
      );
    }
    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows: JSX.Element[] = [];
    let days: JSX.Element[] = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isSelected = isSameDay(day, selectedDate);
        days.push(
          <div
            key={day.toISOString()} // Unique key for each cell
            className={`p-2 text-center cursor-pointer ${
              isCurrentMonth ? '' : 'text-gray-300'
            } ${isSelected ? 'bg-violet-500 text-white rounded' : ''}`}
            onClick={() => setSelectedDate(day)}
          >
            {format(day, 'd')}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(<div key={day.toISOString()} className="grid grid-cols-7">{days}</div>);
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="w-80 mx-auto border p-4 rounded shadow-lg">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;
