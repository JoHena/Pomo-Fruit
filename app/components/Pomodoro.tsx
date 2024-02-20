"use client";
import { Timer } from "@/app/components/Timer";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Navbar } from "./navbar";

export function Pomodoro({}) {
	const [ticking, setTicking] = useState(false);

	return (
		<>
			<Navbar ticking={ticking} />
			<section
				className={twMerge(
					"h-screen flex flex-col items-center tracking-wide gap-20 transition-colors duration-500",
					ticking ? "bg-[#88D18A] text-[#13293D]" : "bg-[#13293D]"
				)}
			>
				<Timer ticking={ticking} setTicking={setTicking} />

				<div className="w-1/3 flex flex-col gap-5">
					<h2
						className={twMerge(
							"border-b text-center p-3",
							ticking ? "border-[#13293D]" : "border-white"
						)}
					>
						Task
					</h2>
					<div
						className={twMerge(
							"p-3 rounded-md border-white border flex justify-between items-center text-l",
							ticking ? "border-[#13293D]" : "border-white"
						)}
					>
						Add Task <span className="text-xl">+</span>
					</div>
				</div>
			</section>
		</>
	);
}
