"use client";
import { Timer } from "@/app/components/Timer";
import { useState } from "react";
import { TaskManager } from "./TaskManager";
import { twMerge } from "tailwind-merge";
import { Navbar } from "./navbar";
import { timerState } from "../typing";

export function Pomodoro({}) {
	const [ticking, setTicking] = useState<timerState>(0);
	const [finishedPomodoros, setFinishedPomodoros] = useState(0);

	return (
		<div
			className={twMerge(
				"flex min-h-screen flex-col items-center gap-[5vh] text-white transition-colors duration-500",
				ticking ? "bg-PomoActive text-PomoInActive" : "bg-PomoInActive",
			)}
		>
			<Navbar />

			<section
				className={twMerge(
					"flex flex-col items-center gap-12 py-12 tracking-wide xl:w-1/3",
				)}
			>
				<Timer
					ticking={ticking}
					setTicking={setTicking}
					setFinishedCount={setFinishedPomodoros}
				/>
				<TaskManager ticking={ticking} finishedPomos={finishedPomodoros} />
			</section>
		</div>
	);
}
