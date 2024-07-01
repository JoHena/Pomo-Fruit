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
			console.log(state.value.tasks.length + 1);
			state.value.tasks.push({
				id: state.value.tasks.length + 1,
				pomosFinished: 0,
				completed: false,
				editMode: false,
				...action.payload,
			});

			state.value.totalTime += action.payload.pomoTime;
		},

		editTask: (state, action: PayloadAction<Task>) => {
			const { tasks } = state.value;

			const taskIndex = tasks.findIndex(
				(task) => task.id === action.payload.id,
			);

			state.value.totalTime =
				state.value.totalTime -
				state.value.tasks[taskIndex].pomoTime +
				action.payload.pomoTime;
			state.value.tasks[taskIndex] = action.payload;
		},

		changeMode: (
			state,
			action: PayloadAction<{ id: number; mode: boolean }>,
		) => {
			console.log(action.payload.id);
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

		finishTask: (state) => {
			const { tasks } = state.value;

			for (const index in tasks) {
				if (tasks[index].completed !== true) {
					state.value.tasks[index].pomosFinished += 1;
					state.value.totalFinished += 1;

					if (tasks[index].pomosFinished === tasks[index].pomoTime) {
						state.value.tasks[index].completed = true;
						state.value.tasks = arrayMove(tasks, 0, -1);
						break;
					}

					break;
				}
			}
		},
	},
});

export const { addTask, editTask, changeMode, changePosition, finishTask } =
	tasks.actions;
export default tasks.reducer;
