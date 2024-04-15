import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./components/TodoSlice";

// Function to load state from localStorage
const loadState = () => {
    const serializedState = localStorage.getItem("todos");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
};


// Function to save state to localStorage
const saveState = (state) => {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('todos', serializedState);
  };



  // Initialize store with persisted state
const preloadedState = loadState();

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  preloadedState
});


// Subscribe to store changes and update localStorage
store.subscribe(() => {
    saveState(store.getState());
  });

export default store;
