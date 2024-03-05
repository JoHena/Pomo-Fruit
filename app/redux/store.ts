import authReducer from "./features/authSlice";
import tasksReducer from "./features/taskSlice";
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
	reducer: {
		authReducer,
		tasksReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
