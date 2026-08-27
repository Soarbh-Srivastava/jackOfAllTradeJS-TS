import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { aC } from 'vitest/dist/types-f302dae9';
import CreateTask from '../components/create-task';

export type Task = {
  id: string;
  title: string;
};

export type TaskState = {
  entities: Task[];
};

type DraftState = RequiredOnly<Task, 'title'>;

const CreateTasks = (draftTask: DraftState): Task => {
  return { ...draftTask, id: nanoid() };
};
const initialState: TaskState = {
  entities: [],
};
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.entities.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {},
  },
});

export const { addTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
