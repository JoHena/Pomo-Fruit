import React, { ReactNode } from "react";
import { Task } from "../typing";
import { twMerge } from "tailwind-merge";

interface ITaskCard {
	ticking: boolean;
	task: Task;
	changeMode: (id: number, edit: boolean) => void;
	taskForm: ReactNode;
}

export function TaskCard({ task, taskForm, changeMode, ticking }: ITaskCard) {
	return (
		<>
			{task.editMode ? (
				taskForm
			) : (
				<li
					className={twMerge(
						"flex items-center justify-between bg-white text-PomoInActive rounded-md rounded-l-sm px-4 py-2 border-l-8 shadow-md",
						ticking ? "border-PomoInActive" : "border-PomoActive"
					)}
				>
					<div className="flex justify-between items-center w-[90%]">
						<div className="flex gap-3 items-center">
							<span className="material-symbols-outlined">check_circle</span>
							<span>{task.taskName}</span>
						</div>
						<span>0/{task.pomodoroTime}</span>
					</div>

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
