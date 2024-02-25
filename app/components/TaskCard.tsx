import React, { ReactNode } from "react";
import { Task } from "../typing";

interface ITaskCard {
	task: Task;
	changeMode: (id: number, edit: boolean) => void;
	taskForm: ReactNode;
}

export function TaskCard({ task, taskForm, changeMode }: ITaskCard) {
	return (
		<>
			{task.editMode ? (
				taskForm
			) : (
				<li className="flex items-center justify-between gap-2 bg-white text-PomoInActive rounded-md rounded-l-sm px-4 py-2 border-l-8 border-PomoActive shadow-md">
					{task.taskName}
					<button
						className="material-symbols-outlined text-xl font-extrabold shadow-xl"
						onClick={() => changeMode(task.id, true)}
					>
						more_vert
					</button>
				</li>
			)}
		</>
	);
}
