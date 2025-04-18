import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, editUser, deleteUser } from '../features/users/usersSlice';
import { selectUsers } from '../features/users/usersSelectors';
import UserTable from '../components/UserTable';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    email: '',
    phone: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
  e.preventDefault();

  
  if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.role.trim()) {
    alert("Please fill in all fields (Name, Email, Phone, Role).");
    return;
  }

  
  if (formData.id) {
    dispatch(editUser(formData));
  } else {
    
    dispatch(addUser({ ...formData, id: Date.now() }));
  }

  
  setFormData({ id: null, name: '', email: '', phone: '', role: '' });
};

  
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (formData.id) {
  //     dispatch(editUser(formData));
  //   } else {
  //     dispatch(addUser({ ...formData, id: Date.now() }));
  //   }
  //   setFormData({ id: null, name: '', email: '', phone: '', role: '' });
  //   if (!formData.name || !formData.email || !formData.phone || !formData.role) {
  //     alert("Please fill in all fields before submitting.");
  //     return;
  //   }

  //   if (formData.id) {
  //     dispatch(editUser(formData));
  //   } else {
  //     dispatch(addUser({ ...formData, id: Date.now() }));
  //   }

  //   setFormData({
  //     id: null,
  //     name: "",
  //     email: "",
  //     phone: "",
  //     role: "",
  //   });
  // };

  const handleEdit = (user) => {
    setFormData(user);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">User Management</h1>
  
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 bg-white p-6 rounded-xl shadow"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Role"
          className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
  
        <button
          type="submit"
          className="md:col-span-2 lg:col-span-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          {formData.id ? 'Edit' : 'Add'} User
        </button>
      </form>
  
      <UserTable users={users} onEdit={handleEdit} />
    </div>
  );
  
};

export default Users;

