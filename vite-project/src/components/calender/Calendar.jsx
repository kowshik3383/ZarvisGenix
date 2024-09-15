import React from "react";

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const events = [
    { day: 1, name: "Luke", color: "bg-blue-200" },
    { day: 2, name: "Ramya", color: "bg-orange-200" },
    { day: 2, name: "Marlon", color: "bg-red-200" },
    { day: 3, name: "Ramya", color: "bg-orange-200" },
    { day: 3, name: "Rishabh", color: "bg-gray-300" },
    { day: 6, name: "Ramya", color: "bg-orange-200" },
    { day: 14, name: "Ramya", color: "bg-orange-200" },
    { day: 22, name: "Luke", color: "bg-blue-200" },
  ];

  const renderDays = () => {
    const daysInMonth = 31; // assuming May has 31 days
    const startDay = 0; // assuming the 1st of May starts on Sunday
    const daysArray = Array(daysInMonth + startDay).fill(null);

    return daysArray.map((_, index) => {
      const day = index - startDay + 1;
      const dayEvents = events.filter(event => event.day === day);

      return (
        <div key={index} className="h-24 border border-gray-200 relative">
          {day > 0 && (
            <div className="absolute top-1 left-1 text-gray-600">{day}</div>
          )}
          <div className="mt-6">
            {dayEvents.map((event, i) => (
              <div
                key={i}
                className={`${event.color} text-sm rounded p-1 mb-1 text-center`}
              >
                {event.name}
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">May, 2022</h1>
      <div className="grid grid-cols-7 gap-2 text-center">
        {daysOfWeek.map(day => (
          <div key={day} className="font-semibold text-gray-600">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 mt-2">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
