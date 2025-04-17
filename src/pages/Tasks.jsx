import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, editTask, deleteTask } from '../features/tasks/tasksSlice';
import { selectTasks } from '../features/tasks/tasksSelectors';

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const [formData, setFormData] = useState({ id: null, title: '', description: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      dispatch(editTask(formData));
    } else {
      dispatch(addTask({ ...formData, id: Date.now() }));
    }
    setFormData({ id: null, title: '', description: '' });
  };

  const handleEdit = (task) => {
    setFormData(task);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md mt-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Task Manager</h1>
  
      {/* Task Form */}
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {/* Add/Update Button */}
        <button
          type="submit"
          className="col-span-full bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {formData.id ? 'Update' : 'Add'} Task
        </button>
      </form>
  
      {/* Task List */}
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition"
          >
            <div className="text-lg font-semibold">
              <strong>{task.title}</strong>: {task.description}
            </div>
            <div className="space-x-2">
              <button
                className="text-blue-500 hover:text-blue-600"
                onClick={() => handleEdit(task)}
              >
                Edit
              </button>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default Tasks;
