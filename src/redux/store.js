import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../features/users/usersSlice';
import tasksReducer from '../features/tasks/tasksSlice';
import calendarReducer from '../features/calender/calendarSlice';


// --- Load state from localStorage ---
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('app_state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn('Could not load state', e);
    return undefined;
  }
};

// --- Save state to localStorage ---
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('app_state', serializedState);
  } catch (e) {
    console.warn('Could not save state', e);
  }
};

// --- Create Store with Preloaded State ---
const store = configureStore({
  reducer: {
    users: usersReducer,
    tasks: tasksReducer,
    calendar: calendarReducer,
  },
  preloadedState: loadState(),
});

// --- Subscribe to store changes ---
store.subscribe(() => {
  saveState({
    users: store.getState().users,
    tasks: store.getState().tasks,
    calendar: store.getState().calendar,
  });
});

export default store;

