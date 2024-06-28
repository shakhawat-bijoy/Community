import React, { useState } from 'react';
import ReactCalendar from 'react-calendar'; // Renamed import to avoid naming conflict
import 'react-calendar/dist/Calendar.css';

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className='bg-[#1e242a] h-screen text-white flex items-center justify-center p-20'>
      <ReactCalendar className="text-black" onChange={onChange} value={value} />
    </div>
  );
}

export default MyCalendar;
