import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterType = {
  value: number;
};

const initialState: CounterType = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { decrement, incrementByAmount, increment } = counterSlice.actions;
export default counterSlice.reducer;
