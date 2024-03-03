import { use, useEffect, useState } from "react";
import { Task } from "../typing";

export function useTasks() {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [totalTime, setTotalTime] = useState(0);

	const addTask = (taskName: string, pomoCount: number) => {
		setTotalTime((time) => {
			return time + pomoCount;
		});

		setTasks((prev: any) => {
			return [
				...prev,
				{
					id: prev.length,
					taskName: taskName,
					pomodoroTime: pomoCount,
					editMode: false,
				},
			];
		});
	};

	const editTask = (id: number, taskName: string, pomoCount: number) => {
		const index = tasks.findIndex((currentTask: Task) => currentTask.id === id);

		setTotalTime((time) => {
			return time + pomoCount - tasks[index].pomodoroTime;
		});

		setTasks((prev: any) => {
			const newTasks = [...prev];
			newTasks[index] = {
				id: newTasks[index].id,
				taskName: taskName,
				pomodoroTime: pomoCount,
				editMode: false,
			};
			return newTasks;
		});
	};

	const changeMode = (id: number, edit: boolean) => {
		setTasks((prev: any) => {
			return prev.map((prev: any) => {
				// Check if the object's id matches the objectId
				if (prev.id === id) {
					// Set 'active' property to true for the matching object
					return { ...prev, editMode: edit };
				}

				return { ...prev, editMode: false };
			});
		});
	};

	// const deleteTask = () => {
	//
	// };

	return { tasks, totalTime, addTask, editTask, changeMode };
}
