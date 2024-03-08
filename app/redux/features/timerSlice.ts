import { ITimer, timerState } from "@/app/typing";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
	value: ITimer;
};

const initialState: InitialState = {
	value: { isTicking: false, timerMode: 0 },
};

export const timer = createSlice({
	name: "timer",
	initialState,
	reducers: {
		setTicking: (state) => {
			state.value.isTicking = !state.value.isTicking;
		},
		setMode: (state, action: PayloadAction<timerState>) => {
			state.value.timerMode = action.payload;
			state.value.isTicking = false;
		},
	},
});

export const { setTicking, setMode } = timer.actions;
export default timer.reducer;
