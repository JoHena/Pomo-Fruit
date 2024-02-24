import React from "react";
import { AdderButton } from "./AdderButton";

interface ICounter {
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function PomoCounter({ count, setCount }: ICounter) {
	return (
		<label className="text-start flex flex-col gap-3 w-2/3">
			Estimated Pomodoros
			<div className="flex gap-3 w-full">
				<input
					type="number"
					className="text-xl text-white text-center w-12 outline-none bg-PomoInActive rounded-sm"
					value={count}
				></input>

				<AdderButton
					type="expand_less"
					onClick={() => {
						count >= 1 && setCount((current) => current + 1);
					}}
				/>

				<AdderButton
					type="expand_more"
					onClick={() => {
						count > 1 && setCount((current) => current - 1);
					}}
				/>
			</div>
		</label>
	);
}
