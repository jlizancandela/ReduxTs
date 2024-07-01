import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState = { value: 0 } satisfies CounterState as CounterState;

export const counterSlice = createSlice({
  name: "counter",
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
    reset: (state) => {
      Object.assign(state, initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
