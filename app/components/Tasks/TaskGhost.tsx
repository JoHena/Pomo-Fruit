import { Task } from "@/app/typing";
import React from "react";
import { twMerge } from "tailwind-merge";

export function TaskGhost() {
	return (
		<>
			<li
				className={twMerge(
					"shadow-m flex h-12 items-center justify-between rounded-md rounded-l-sm border-l-8 bg-white px-4 py-2 text-transparent opacity-60",
				)}
			>
				<div className="flex w-[90%] items-center justify-between">
					<div className="flex items-center gap-3">
						<span className={twMerge("material-symbols-outlined")}>
							check_circle
						</span>
						<span>awdawdwa</span>
					</div>
					<span>0/0</span>
				</div>

				<button
					data-no-dnd="true"
					className="material-symbols-outlined poi text-xl font-extrabold shadow-xl transition-colors hover:text-blue-500 disabled:text-gray-400 disabled:hover:text-gray-400"
				>
					more_vert
				</button>
			</li>
		</>
	);
}
