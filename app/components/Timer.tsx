"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";

interface ITimer {
	ticking: boolean;
	setTicking: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Timer({ ticking, setTicking }: ITimer) {
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
			if (ticking) clockTicking();
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, [seconds, minutes, ticking]);

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

			<Button
				className={twMerge(ticking && "bg-[#C20114] text-white")}
				variant={"pomodoro"}
				size={"pomodoro"}
				onClick={() => setTicking((ticking) => !ticking)}
			>
				{ticking ? "Stop" : "Start"}
			</Button>
		</div>
	);
}
