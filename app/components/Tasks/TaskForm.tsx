import React, { useState } from "react";
import { AppDispatch } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { addTask, changeMode, editTask } from "@/app/redux/features/taskSlice";
import { PomoCounter } from "./PomoCounter";
import { Task } from "@/app/typing";

interface ITaskForm {
	task?: Task;
	setActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TaskForm({ setActive, task }: ITaskForm) {
	const [pomoTime, setPomoTime] = useState(task ? task.pomoTime : 1);
	const [taskName, setTaskName] = useState(task && task.taskName);
	const dispatch = useDispatch<AppDispatch>();

	const handleSave = () => {
		if (!taskName) return;

		if (task?.editMode) {
			dispatch(editTask({ ...task, taskName, pomoTime }));
			dispatch(changeMode({ id: task!.id, mode: false }));
		} else {
			dispatch(addTask({ taskName, pomoTime }));
			setActive && setActive(false);
		}
	};

	return (
		<form className="grid w-full animate-task-down gap-3 overflow-hidden rounded-md bg-white p-4 text-black shadow-md">
			<input
				autoFocus
				className="w-full appearance-none bg-transparent text-xl outline-none"
				placeholder="What are you working on?"
				defaultValue={taskName}
				onChange={(e) => {
					setTaskName(e.target.value);
				}}
			></input>

			<PomoCounter count={pomoTime} setCount={setPomoTime} />

			<div className="flex items-center justify-end gap-5">
				<button
					type="button"
					className="w-20 rounded-lg p-2 shadow-sm shadow-PomoInActive"
					onClick={() => {
						if (setActive) {
							setActive(false);
							return;
						}
						dispatch(changeMode({ id: task!.id, mode: false }));
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
