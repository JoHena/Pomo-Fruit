import React from "react";
import { Button } from "@/components/ui/button";

export function Timer({}) {
	return (
		<div className="flex flex-col gap-8 items-center">
			<div className="flex justify-between">
				<Button variant={"ghost"}>Pomodoro</Button>
				<Button variant={"ghost"}>Short Break</Button>
				<Button variant={"ghost"}>Long Break</Button>
			</div>
			<div className="text-8xl">25:00</div>
			<Button variant={"pomodoro"} size={"pomodoro"}>
				Start
			</Button>
		</div>
	);
}
