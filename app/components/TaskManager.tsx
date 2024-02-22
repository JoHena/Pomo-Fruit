import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

export function TaskManager({ ticking }: { ticking: boolean }) {
	const [active, setActive] = useState(false);

	return (
		<div className="w-1/3 flex flex-col gap-5 transition-all">
			<h2
				className={twMerge(
					"border-b-2 text-center p-3 font-bold",
					ticking ? "border-[#13293D]" : "border-white"
				)}
			>
				Task
			</h2>

			<button
				className={twMerge(
					"p-4 rounded-md bg-white text-PomoInActive flex transition-all duration-500 h-16 shadow-xl",
					ticking && "bg-PomoInActive text-white",
					active && "h-64 bg-white"
				)}
				onClick={() => {
					!active && setActive(!active);
				}}
			>
				{active ? (
					<form className="grid w-full gap-3 text-black">
						<input
							className="text-xl bg-transparent w-full appearance-none outline-none"
							placeholder="What are you working on?"
						></input>

						<label className="text-start flex flex-col gap-3 w-2/3">
							Estimated Pomodoros
							<div className="flex gap-3 w-full">
								<input
									type="number"
									className="text-xl text-white text-center w-12 outline-none bg-PomoInActive rounded-sm"
									value={1}
								></input>
								<button className="shadow-sm shadow-PomoInActive rounded-lg w-10 border flex justify-center items-center p-2">
									<span className="material-symbols-outlined">expand_less</span>
								</button>
								<button className="shadow-sm shadow-PomoInActive rounded-lg w-10 border flex justify-center items-center p-2">
									<span className="material-symbols-outlined">expand_More</span>
								</button>
							</div>
						</label>

						<div className="flex items-center justify-end gap-5">
							<button className="shadow-sm shadow-PomoInActive w-20 rounded-lg p-2">
								Cancel
							</button>
							<button className="shadow-sm bg-PomoInActive w-20 text-white shadow-PomoInActive rounded-lg border p-2">
								Save
							</button>
						</div>
					</form>
				) : (
					<div className="text-PomoInActive w-full text-center">
						Add Task <span className="text-xl">+</span>
					</div>
				)}
			</button>
		</div>
	);
}
