import React from "react";
import { AdderButton } from "../AdderButton";

interface ICounter {
	count: number;
	setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function PomoCounter({ count, setCount }: ICounter) {
	return (
		<label className="flex w-2/3 flex-col gap-3 text-start">
			Estimated Pomodoros
			<div className="flex w-full gap-3">
				<input
					type="number"
					className="w-12 rounded-sm bg-PomoInActive text-center text-xl text-white outline-none"
					value={count}
					onChange={() => {
						count >= 1 && setCount((current) => current + 1);
					}}
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
