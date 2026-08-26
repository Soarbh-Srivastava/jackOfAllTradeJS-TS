import { createSlice } from '@reduxjs/toolkit';

const initState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counterSlices',
  initialState: initState,
  reducers: {
    increment(state, action) {
      state.value++;
    },
    incrementByValue(state, action) {
      state.value += action.payload;
      console.log(state.value);
    },
  },
});

export const { increment, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
