import { useState } from "react";

import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";

function ProductivityCalendar() {

  const [date, setDate] = useState(new Date());

  return (

    <div className="mt-10">

      <h2 className="text-3xl font-bold mb-6">
        Productivity Calendar 📅
      </h2>

      <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 overflow-hidden">

        <Calendar
          onChange={setDate}
          value={date}
          className="w-full border-none bg-transparent text-black rounded-2xl"
        />

        <div className="mt-6 text-lg text-gray-400">

          Selected Date:
          <span className="text-purple-400 ml-2">
            {date.toDateString()}
          </span>

        </div>

      </div>

    </div>
  );
}

export default ProductivityCalendar;