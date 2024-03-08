import { Task } from "@/app/typing";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { arrayMove } from "@dnd-kit/sortable";

type InitialState = {
	value: {
		tasks: Task[];
		totalTime: number;
		totalFinished: number;
	};
};

const initialState: InitialState = {
	value: { tasks: [], totalTime: 0, totalFinished: 0 },
};

export const tasks = createSlice({
	name: "tasks",
	initialState,
	reducers: {
		addTask: (
			state,
			action: PayloadAction<{ taskName: string; pomoTime: number }>,
		) => {
			state.value.tasks.push({
				id: state.value.tasks.length + 1,
				completed: false,
				editMode: false,
				...action.payload,
			});

			state.value.totalTime += action.payload.pomoTime;
		},

		editTask: (state, action: PayloadAction<Task>) => {
			state.value.totalTime =
				state.value.totalTime -
				state.value.tasks[action.payload.id].pomoTime +
				action.payload.pomoTime;
			state.value.tasks[action.payload.id] = action.payload;
		},

		changeMode: (
			state,
			action: PayloadAction<{ id: number; mode: boolean }>,
		) => {
			const newTaskList = state.value.tasks.map((prev: any) => {
				// Check if the object's id matches the objectId
				if (prev.id === action.payload.id) {
					// Set 'active' property to true for the matching object
					return { ...prev, editMode: action.payload.mode };
				}

				return { ...prev, editMode: false };
			});

			state.value.tasks = newTaskList;
		},

		changePosition: (
			state,
			action: PayloadAction<{ oldTaskID: number; newTaskID: number }>,
		) => {
			const { tasks } = state.value;
			const originalPos = tasks.findIndex(
				(task) => task.id === action.payload.oldTaskID,
			);
			const newPos = tasks.findIndex(
				(task) => task.id === action.payload.newTaskID,
			);

			state.value.tasks = arrayMove(tasks, originalPos, newPos);
		},

		finishTask: (state, action: PayloadAction<{ id: number }>) => {
			state.value.tasks[action.payload.id].completed = true;
			state.value.totalFinished += 1;
			state.value.totalTime -= state.value.tasks[action.payload.id].pomoTime;
		},
	},
});

export const { addTask, editTask, changeMode, changePosition } = tasks.actions;
export default tasks.reducer;
