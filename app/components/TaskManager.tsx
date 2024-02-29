import React, { useState } from "react";
import { TaskForm } from "./TaskForm";
import { twMerge } from "tailwind-merge";
import { TaskCard } from "./TaskCard";
import { useTasks } from "../helpers/Task";

export function TaskManager({ ticking }: { ticking: boolean }) {
	const [active, setActive] = useState(false);
	const { tasks, ...taskActions } = useTasks();

	return (
		<div className="flex w-[90vw] flex-col items-center gap-5 xl:w-[90%]">
			<h2
				className={twMerge(
					"w-full border-b-2 p-3 text-center font-bold",
					ticking ? "border-[#13293D]" : "border-white",
				)}
			>
				Tasks
			</h2>

			{tasks.length > 0 && (
				<ul className="flex flex-col gap-5">
					{tasks.map((task, index) => (
						<TaskCard
							ticking={ticking}
							key={index}
							task={task}
							changeMode={taskActions.changeMode}
							taskForm={<TaskForm task={task} taskActions={taskActions} />}
						/>
					))}
				</ul>
			)}

			{active ? (
				<TaskForm setActive={setActive} taskActions={taskActions} />
			) : (
				<button
					className={twMerge(
						"flex h-16 w-full rounded-md bg-white p-4 text-PomoInActive shadow-md",
						ticking && "bg-PomoInActive text-white",
					)}
					onClick={() => {
						!active && setActive(!active);
					}}
				>
					<div className={twMerge("w-full text-center")}>
						Add Task <span className="text-xl">+</span>
					</div>
				</button>
			)}
			<div>Pomos: 0/2 25min remaining</div>
		</div>
	);
}
