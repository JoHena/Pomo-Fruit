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
						"flex items-center justify-between rounded-md rounded-l-sm border-l-8 bg-white px-4 py-2 text-PomoInActive shadow-md",
						ticking ? "border-PomoInActive" : "border-PomoActive",
					)}
				>
					<div className="flex w-[90%] items-center justify-between">
						<div className="flex items-center gap-3">
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
