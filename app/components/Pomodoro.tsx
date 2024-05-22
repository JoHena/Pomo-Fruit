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
				"pomo-section flex min-h-screen snap-start flex-col items-center gap-[5vh] text-white",
				!timer.isTicking || timer.timerMode === timerState.Rest
					? "bg-PomoInActive"
					: "bg-PomoActive text-PomoInActive",
			)}
		>
			<Navbar />
			<ErrorPopup />

			<section className="flex flex-col items-center gap-12 py-6 tracking-wide xl:w-1/3">
				<Timer {...timer} />
				<TaskManager {...timer} />
			</section>
		</div>
	);
}
