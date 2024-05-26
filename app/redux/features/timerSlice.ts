import { calculatePercentage } from "@/app/helpers/PercentageCalc";
import { IPomodoro, timerState } from "@/app/typing";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
	value: IPomodoro;
};

const initialState: InitialState = {
	value: {
		isTicking: false,
		timerMode: 0,
		minutes: 25,
		seconds: 0,
		percentage: 0,
		modeTime: {
			0: 25,
			1: 5,
			2: 25,
		},
	},
};

export const timer = createSlice({
	name: "timer",
	initialState,
	reducers: {
		setTicking: (state) => {
			state.value.isTicking = !state.value.isTicking;
		},
		setMode: (state, action: PayloadAction<timerState>) => {
			// Change the timermode
			state.value.timerMode = action.payload;
			// Change the minutes and seconds to current modes setting
			state.value.minutes = state.value.modeTime[action.payload];
			state.value.seconds = 0;

			// Stop Timer and reset completion percentage
			state.value.isTicking = false;
			state.value.percentage = 0;
		},
		updateTimer: (state) => {
			const { minutes, seconds } = state.value;

			if (seconds === 0) {
				state.value.minutes = minutes - 1;
				state.value.seconds = 59;
			} else {
				state.value.seconds = seconds - 1;
			}

			// Calculate new percentage for completion
			const newPercentage = calculatePercentage(
				state.value.minutes + state.value.seconds * 0.01,
				state.value.timerMode,
			);

			state.value.percentage = newPercentage;
		},
	},
});

export const { setTicking, setMode, updateTimer } = timer.actions;
export default timer.reducer;
