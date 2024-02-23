import React, { useState } from "react";
import { AdderButton } from "./AdderButton";

interface ITaskForm {
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TaskForm({ setActive }: ITaskForm) {
	const [pomoCount, setPomoCount] = useState(1);

	return (
		<form className="grid p-4 rounded-md w-full gap-3 bg-white text-black animate-task-down overflow-hidden">
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
						value={pomoCount}
					></input>

					<AdderButton
						type="expand_less"
						onClick={() => {
							pomoCount >= 1 && setPomoCount((count) => count + 1);
						}}
					/>

					<AdderButton
						type="expand_more"
						onClick={() => {
							pomoCount > 1 && setPomoCount((count) => count - 1);
						}}
					/>
				</div>
			</label>

			<div className="flex items-center justify-end gap-5">
				<button
					type="button"
					className="shadow-sm shadow-PomoInActive w-20 rounded-lg p-2"
					onClick={() => {
						setActive(false);
					}}
				>
					Cancel
				</button>
				<button className="shadow-sm bg-PomoInActive w-20 text-white shadow-PomoInActive rounded-lg border p-2">
					Save
				</button>
			</div>
		</form>
	);
}
