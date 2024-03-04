"use client";
import { Timer } from "@/app/components/Timer";
import { useState } from "react";
import { TaskManager } from "./TaskManager";
import { twMerge } from "tailwind-merge";
import { Navbar } from "./navbar";
import { timerState } from "../typing";

export function Pomodoro({}) {
	const [timer, setTimer] = useState({
		ticking: false,
		mode: timerState.Work,
	});
	const [finishedPomodoros, setFinishedPomodoros] = useState(0);

	return (
		<div
			className={twMerge(
				"flex min-h-screen flex-col items-center gap-[5vh] text-white transition-colors duration-500",
				!timer.ticking || timer.mode === timerState.Rest
					? "bg-PomoInActive"
					: "bg-PomoActive text-PomoInActive",
			)}
		>
			<Navbar />

			<section className="flex flex-col items-center gap-12 py-12 tracking-wide xl:w-1/3">
				<Timer
					timer={timer}
					setTicking={setTimer}
					setFinishedCount={setFinishedPomodoros}
				/>
				<TaskManager timer={timer} finishedPomos={finishedPomodoros} />
			</section>
		</div>
	);
}
