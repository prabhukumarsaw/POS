// src/DateTime.js
import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[currentDateTime.getDay()];

  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = currentDateTime.toLocaleDateString('en-US', options);
  const time = currentDateTime.toLocaleTimeString();

  return (
    <div className="flex space-x-2 text-gray-600 font-medium">
      <span>{dayName},</span>
      <span>{date}</span>
      {/* <span>{time}</span> */}
    </div>
  );
};

export default DateTime;
