import * as React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { twMerge } from "tailwind-merge";

interface CardInterface {
	title: React.ReactNode;
	description: React.ReactNode;
	children: React.ReactNode;
	cardClass?: string;
	headerClass?: string;
}

export function PomoCard({
	title,
	description,
	children,
	cardClass,
	headerClass,
}: CardInterface) {
	return (
		<Card className={twMerge("w-[350px] shadow-md", cardClass)}>
			<CardHeader className={headerClass}>
				<CardTitle className="text-xl">{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col items-center justify-center gap-6">
				{children}
			</CardContent>
		</Card>
	);
}
