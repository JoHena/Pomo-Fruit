import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
	isAuth: boolean;
	username: string;
	uid: string;
	isModerator: boolean;
};

type InitialState = {
	value: AuthState;
};

const initialState: InitialState = {
	value: {
		isAuth: false,
		username: "",
		uid: "",
		isModerator: false,
	},
};

export const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logOut: () => {
			return initialState;
		},
		logIn: (state, action: PayloadAction<string>) => {
			return {
				value: {
					isAuth: true,
					username: action.payload,
					uid: "2",
					isModerator: false,
				},
			};
		},
	},
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;
