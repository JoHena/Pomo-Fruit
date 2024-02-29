import { PomoCounter } from "./PomoCounter";
import React, { useState } from "react";
import { Task } from "../typing";

interface ITaskForm {
	task?: Task;
	setActive?: React.Dispatch<React.SetStateAction<boolean>>;
	taskActions: {
		addTask: (taskName: string, pomoCount: number) => void;
		editTask: (id: number, taskName: string, pomoCount: number) => void;
		changeMode: (id: number, edit: boolean) => void;
	};
}

export function TaskForm({ setActive, taskActions, task }: ITaskForm) {
	const [pomoCount, setPomoCount] = useState(task ? task.pomodoroTime : 1);
	const [taskName, setTaskName] = useState(task && task.taskName);

	const handleSave = () => {
		if (!taskName) return;

		if (task?.editMode) {
			taskActions.editTask(task!.id, taskName, pomoCount);
		} else {
			taskActions.addTask(taskName, pomoCount);
			setActive && setActive(false);
		}
	};

	return (
		<form className="grid w-full animate-task-down gap-3 overflow-hidden rounded-md bg-white p-4 text-black shadow-md">
			<input
				autoFocus
				className="w-full appearance-none bg-transparent text-xl outline-none"
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
					className="w-20 rounded-lg p-2 shadow-sm shadow-PomoInActive"
					onClick={() => {
						if (setActive) {
							setActive(false);
							return;
						}
						taskActions.changeMode(task!.id, false);
					}}
				>
					Cancel
				</button>

				<button
					type="button"
					className="w-20 rounded-lg border bg-PomoInActive p-2 text-white shadow-sm shadow-PomoInActive"
					onClick={handleSave}
				>
					Save
				</button>
			</div>
		</form>
	);
}
