// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   reminders: {}, // key: date string (YYYY-MM-DD), value: reminder text
// };

// const calendarSlice = createSlice({
//   name: 'calendar',
//   initialState,
//   reducers: {
//     addReminder: (state, action) => {
//       const { date, text } = action.payload;
//       state.reminders[date] = text;
//     },
    
//   },
// });

// export const { addReminder } = calendarSlice.actions;
// export default calendarSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reminders: {}, // key: date string (YYYY-MM-DD), value: reminder text
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addReminder: (state, action) => {
      const { date, text } = action.payload;
      state.reminders[date] = text;
    },
    deleteReminder: (state, action) => {
      delete state.reminders[action.payload]; // payload = date string
    },
  },
});

export const { addReminder, deleteReminder } = calendarSlice.actions;
export default calendarSlice.reducer;
