"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function Timer() {
	const [minutes, setMinutes] = useState(25);
	const [seconds, setSeconds] = useState(0);

	const clockTicking = () => {
		if (minutes === 0 && seconds === 0) {
			alert("Times Up");
		} else if (seconds === 0) {
			setMinutes((minute) => minute - 1);
			setSeconds(59);
		} else {
			setSeconds((second) => second - 1);
		}
	};

	useEffect(() => {
		const timer = setInterval(() => {
			clockTicking();
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, [seconds, minutes]);

	return (
		<div className="flex flex-col gap-8 items-center">
			<div className="flex justify-between">
				<Button variant={"ghost"}>Pomodoro</Button>
				<Button variant={"ghost"}>Short Break</Button>
				<Button variant={"ghost"}>Long Break</Button>
			</div>

			<div className="text-8xl font-extrabold">
				{minutes}:{seconds.toString().padStart(2, "0")}
			</div>
			<Button variant={"pomodoro"} size={"pomodoro"}>
				Start
			</Button>
		</div>
	);
}
