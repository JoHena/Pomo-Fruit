import { ReactNode } from "react";

interface ISection {
	title: ReactNode;
	children: ReactNode;
}

export function Section({ title, children }: ISection) {
	return (
		<div className="flex w-full flex-col gap-3 border-b border-black pb-8">
			<span>{title}</span>

			<div className="flex flex-col gap-2 text-sm font-medium">{children}</div>
		</div>
	);
}
