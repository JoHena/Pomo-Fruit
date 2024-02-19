"use client";
import { Timer } from "@/app/components/Timer";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function Pomodoro({}) {
	const [ticking, setTicking] = useState(false);

	return (
		<section
			className={twMerge(
				"h-screen flex flex-col items-center gap-20 font-bold transition-colors duration-",
				ticking ? "bg-green-400" : "bg-[#13293D]"
			)}
		>
			<Timer ticking={ticking} setTicking={setTicking} />

			<div className="w-1/3 flex flex-col gap-5">
				<h2 className="border-b text-center p-3">Task</h2>
				<div className="p-3 rounded-md border-white	border flex justify-between text-l">
					Add Task <span className="text-xl">+</span>
				</div>
			</div>
		</section>
	);
}
