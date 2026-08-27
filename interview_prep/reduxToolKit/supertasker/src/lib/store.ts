import { configureStore } from '@reduxjs/toolkit';

import taskSliceReducer from '../features/task-sclie';
const store = configureStore({
  reducer: {
    tasks: taskSliceReducer,
  },
});

export default store;
