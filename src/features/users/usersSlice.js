// src/features/users/usersSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { id: 1, name: 'Monis', email: 'monisfaheem@gmail.com', phone: '+92 3132335303', role: 'Admin' },

  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email, phone, role } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        existingUser.phone = phone;
        existingUser.role = role;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { addUser, editUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
