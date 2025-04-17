import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import { addReminder, deleteReminder } from '../features/calender/calendarSlice';

const normalizeDate = (date) => {
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - offset * 60 * 1000);
  return localDate.toISOString().split('T')[0];
};

const CalendarPage = () => {
  const dispatch = useDispatch();
  const reminders = useSelector((state) => state.calendar.reminders);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reminderText, setReminderText] = useState('');

  const handleSetReminder = () => {
    const formattedDate = normalizeDate(selectedDate);
    dispatch(addReminder({ date: formattedDate, text: reminderText }));
    setReminderText('');
  };

  const handleDeleteReminder = (date) => {
    dispatch(deleteReminder(date));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Calendar Reminders</h2>
  
      {/* Input Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <input
          type="date"
          className="border p-3 rounded-md w-full md:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={normalizeDate(selectedDate)}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
        <input
          type="text"
          className="border p-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter reminder"
          value={reminderText}
          onChange={(e) => setReminderText(e.target.value)}
        />
        <button
          onClick={handleSetReminder}
          className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Set Reminder
        </button>
      </div>
  
      {/* Reminder List */}
      <div>
        <h3 className="text-xl font-semibold mb-4">All Reminders:</h3>
        {Object.keys(reminders).length === 0 ? (
          <p className="text-gray-500">No reminders set.</p>
        ) : (
          <ul className="space-y-4">
            {Object.entries(reminders).map(([date, text]) => (
              <li
                key={date}
                className="border p-4 rounded-lg shadow-md flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
              >
                <div className="text-lg font-medium">
                  <strong>{date}:</strong> {text}
                </div>
                <button
                  onClick={() => handleDeleteReminder(date)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
  
};

export default CalendarPage;