import { PomoCounter } from "./PomoCounter";
import React, { useState } from "react";
import { Task } from "../typing";

interface ITaskForm {
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
	task?: Task;
}

export function TaskForm({ setActive, setTasks, task }: ITaskForm) {
	const [pomoCount, setPomoCount] = useState(task ? task.pomodoroTime : 1);
	const [taskName, setTaskName] = useState(task && task.taskName);

	return (
		<form className="grid p-4 rounded-md w-full gap-3 bg-white text-black animate-task-down overflow-hidden">
			<input
				className="text-xl bg-transparent w-full appearance-none outline-none"
				placeholder="What are you working on?"
				value={taskName}
				onChange={(e) => {
					setTaskName(e.target.value);
				}}
			></input>

			<PomoCounter count={pomoCount} setCount={setPomoCount} />

			<div className="flex items-center justify-end gap-5">
				<button
					type="button"
					className="shadow-sm shadow-PomoInActive w-20 rounded-lg p-2"
					onClick={() => {
						setActive(false);
					}}
				>
					Cancel
				</button>

				<button
					type="button"
					className="shadow-sm bg-PomoInActive w-20 text-white shadow-PomoInActive rounded-lg border p-2"
					onClick={() => {
						setTasks((prev: any) => {
							return [...prev, { taskName: taskName, pomodoroTime: pomoCount }];
						});
						setActive(false);
					}}
				>
					Save
				</button>
			</div>
		</form>
	);
}
