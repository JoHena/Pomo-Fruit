import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { TaskForm } from "./TaskForm";
import { Task } from "../typing";

interface ITaskCard {
	task: Task;
	setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export function TaskCard({ task, setTasks }: ITaskCard) {
	const [edit, setEdit] = useState(false);

	return (
		<>
			{edit ? (
				<TaskForm task={task} setTasks={setTasks} setActive={setEdit} />
			) : (
				<li className="flex items-center justify-between gap-2 bg-white text-PomoInActive rounded-md rounded-l-sm px-4 py-2 border-l-8 border-PomoActive">
					{task.taskName}
					<button
						className="material-symbols-outlined text-xl font-extrabold shadow-xl"
						onClick={() => setEdit(true)}
					>
						more_vert
					</button>
				</li>
			)}
		</>
	);
}
