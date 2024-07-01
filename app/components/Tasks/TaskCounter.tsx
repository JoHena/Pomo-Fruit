"use client";
import { twMerge } from "tailwind-merge";
import { ITimer, timerState } from "@/app/typing";
import { useAppSelector } from "@/app/redux/store";

export function TaskCounter({ timerMode, isTicking }: ITimer) {
	const { tasks, totalTime, totalFinished } = useAppSelector(
		(state) => state.tasksReducer.value,
	);

	return (
		<div
			className={twMerge(
				"flex w-full justify-evenly rounded-md bg-white bg-opacity-10 p-3 text-white shadow-md",
				isTicking &&
					timerMode === timerState.Work &&
					"bg-opacity-100 text-PomoInActive shadow-md shadow-PomoInActive",
			)}
		>
			{tasks.length <= 0 ? (
				<p className="tracking-wide">Lets get to work!</p>
			) : (
				<div className="flex flex-col flex-wrap items-center gap-2 lg:flex-row lg:gap-4">
					<span className="w-full border-b pb-2 text-center lg:w-fit lg:border-none lg:pb-0">
						{totalFinished}/{totalTime} Pomodros
					</span>
					<div className="hidden lg:block">|</div>
					<span>Time remaining: {totalTime * 25 - totalFinished * 25} min</span>
				</div>
			)}
		</div>
	);
}
