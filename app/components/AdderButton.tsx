import React from "react";
import { twMerge } from "tailwind-merge";

interface AdderButton {
	className?: string;
	type: "expand_less" | "expand_more";
	onClick: () => void;
}

export function AdderButton({ className, type, onClick }: AdderButton) {
	return (
		<button
			type="button"
			className={twMerge(
				"shadow-sm shadow-PomoInActive rounded-lg w-10 border flex justify-center items-center p-2 pointer-events-auto",
				className
			)}
			onClick={onClick}
		>
			<span className="material-symbols-outlined">{type}</span>
		</button>
	);
}
