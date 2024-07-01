import React, { ReactNode } from "react";
import { Task, timerState } from "../../typing";
import { twMerge } from "tailwind-merge";
import { changeMode } from "../../redux/features/taskSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "../../redux/store";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ITaskCard {
	task: Task;
	taskForm: ReactNode;
}

export function TaskCard({ task, taskForm }: ITaskCard) {
	const dispatch = useDispatch<AppDispatch>();
	const { isTicking, timerMode } = useAppSelector(
		(state) => state.timerReducer.value,
	);

	const { attributes, listeners, transition, transform, setNodeRef } =
		useSortable({ id: task.id, animateLayoutChanges: () => false });

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	};

	return (
		<>
			{task.editMode ? (
				taskForm
			) : (
				<li
					data-no-dnd={"true"}
					ref={setNodeRef}
					className={twMerge(
						"shadow-m flex h-12 touch-none items-center justify-between rounded-md rounded-l-sm border-l-8 bg-white px-4 py-2 text-PomoInActive",
						isTicking && timerMode === timerState.Work
							? "border-PomoInActive"
							: "border-PomoActive",
					)}
					{...attributes}
					{...listeners}
					style={style}
				>
					<div className="flex w-[90%] items-center justify-between">
						<div className="flex items-center gap-3">
							<span
								className={twMerge(
									"material-symbols-outlined",
									task.completed && "text-PomoActive",
								)}
							>
								check_circle
							</span>
							<span>{task.taskName}</span>
						</div>
						<span
							className={
								task.pomosFinished === task.pomoTime
									? "text-PomoActive"
									: "text-PomoInActive]"
							}
						>
							{task.pomosFinished}/{task.pomoTime}
						</span>
					</div>

					<button
						disabled={task.completed}
						data-no-dnd="true"
						className="material-symbols-outlined poi text-xl font-extrabold shadow-xl transition-colors hover:text-blue-500 disabled:text-gray-400 disabled:hover:text-gray-400"
						onClick={() => {
							dispatch(changeMode({ id: task!.id, mode: true }));
						}}
					>
						more_vert
					</button>
				</li>
			)}
		</>
	);
}
