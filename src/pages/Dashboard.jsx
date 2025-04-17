import React from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../features/users/usersSelectors';
import { selectTasks } from '../features/tasks/tasksSelectors';

const Dashboard = () => {
  const users = useSelector(selectUsers);
  const tasks = useSelector(selectTasks);
  const reminders = useSelector((state) => state.calendar.reminders);
  const totalReminders = Object.keys(reminders).length;

  

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard Overview</h1>
  
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Users Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-gray-600 text-lg font-semibold mb-1">Users</h2>
          <p className="text-3xl font-bold text-blue-600">{users.length}</p>
        </div>
  
        {/* Tasks Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-gray-600 text-lg font-semibold mb-1">Tasks</h2>
          <p className="text-3xl font-bold text-green-600">{tasks.length}</p>
        </div>
  
        {/* Reminders Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition duration-300">
          <h2 className="text-gray-600 text-lg font-semibold mb-1">Reminders</h2>
          <p className="text-3xl font-bold text-purple-600">{totalReminders}</p>
        </div>
      </div>
    </div>
  );
  
};

export default Dashboard;
