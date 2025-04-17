import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../features/users/usersSlice';

const UserTable = ({ users, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));  
  };

  return (
    <div className="overflow-x-auto bg-white p-4 rounded-xl shadow-md mt-6">
      <h2 className="text-lg font-semibold mb-4">User List</h2>
  
      <table className="min-w-full table-auto text-sm md:text-base">
        <thead>
          <tr className="bg-blue-100 text-gray-700">
            <th className="px-4 py-3 text-left">Name</th>
            <th className="px-4 py-3 text-left">Email</th>
            <th className="px-4 py-3 text-left">Phone</th>
            <th className="px-4 py-3 text-left">Role</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t hover:bg-gray-50 transition">
              <td className="px-4 py-3">{user.name}</td>
              <td className="px-4 py-3">{user.email}</td>
              <td className="px-4 py-3">{user.phone}</td>
              <td className="px-4 py-3">{user.role}</td>
              <td className="px-4 py-3 flex justify-center space-x-2">
                <button
                  onClick={() => onEdit(user)}
                  className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default UserTable;
