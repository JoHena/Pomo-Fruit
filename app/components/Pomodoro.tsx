"use client";
import { Timer } from "@/app/components/Timer";
import { useState } from "react";
import { TaskManager } from "./TaskManager";
import { twMerge } from "tailwind-merge";
import { Navbar } from "./navbar";

export function Pomodoro({}) {
	const [ticking, setTicking] = useState(false);

	return (
		<>
			<Navbar ticking={ticking} />

			<section
				className={twMerge(
					"flex flex-col items-center min-h-screen tracking-wide gap-20 transition-colors duration-500",
					ticking ? "bg-PomoActive text-PomoInActive" : "bg-PomoInActive"
				)}
			>
				<Timer ticking={ticking} setTicking={setTicking} />
				<TaskManager ticking={ticking} />
			</section>
		</>
	);
}
