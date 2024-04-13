"use client";
import { Timer } from "@/app/components/Timer";
import { TaskManager } from "./TaskManager";
import { twMerge } from "tailwind-merge";
import { Navbar } from "./Navbar";
import { timerState } from "../typing";
import { useAppSelector } from "../redux/store";
import { ErrorPopup } from "./Error";

export function Pomodoro({}) {
	const { ...timer } = useAppSelector((state) => state.timerReducer.value);

	return (
		<div
			className={twMerge(
				"flex min-h-screen flex-col items-center gap-[5vh] text-white transition-colors duration-500",
				!timer.isTicking || timer.timerMode === timerState.Rest
					? "bg-PomoInActive"
					: "bg-PomoActive text-PomoInActive",
			)}
		>
			<Navbar />
			<ErrorPopup />

			<section className="flex flex-col items-center gap-12 py-12 tracking-wide xl:w-1/3">
				<Timer {...timer} />
				<TaskManager {...timer} />
			</section>
		</div>
	);
}
