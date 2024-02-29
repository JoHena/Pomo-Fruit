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
				"pointer-events-auto flex w-10 items-center justify-center rounded-lg border p-2 shadow-sm shadow-PomoInActive",
				className,
			)}
			onClick={onClick}
		>
			<span className="material-symbols-outlined">{type}</span>
		</button>
	);
}
