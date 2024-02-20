import React from "react";
import { twMerge } from "tailwind-merge";

export function Navbar({ ticking }: { ticking: boolean }) {
	return (
		<div
			className={twMerge(
				"flex justify-center font-bold tracking-wide pt-5 pb-10 transition-colors duration-500",
				ticking ? "bg-[#88D18A] text-[#13293D]" : "bg-[#13293D]"
			)}
		>
			<nav className="flex items-center justify-between w-1/3">
				<div>Pomodoro</div>
				<ul className="flex gap-8">
					<li>Settings</li>
					<li>Login</li>
				</ul>
			</nav>
		</div>
	);
}
