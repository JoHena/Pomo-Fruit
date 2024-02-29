"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { calculatePercentage } from "../helpers/PercentageCalc";
import "react-circular-progressbar/dist/styles.css";

interface ITimer {
	ticking: boolean;
	setTicking: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Timer({ ticking, setTicking }: ITimer) {
	const [minutes, setMinutes] = useState(25);
	const [seconds, setSeconds] = useState(0);
	const [percentage, setPercentage] = useState(0);

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
			if (ticking) {
				setPercentage(calculatePercentage(minutes + seconds * 0.01));
				clockTicking();
			}
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, [seconds, minutes, ticking]);

	return (
		<div className="flex flex-col items-center gap-8 xl:w-[55%]">
			<div className="w-full text-8xl font-extrabold">
				<CircularProgressbar
					styles={buildStyles({
						textColor: ticking ? "#13293D" : "white",
						pathColor: ticking
							? "rgba(217, 219, 241, 1)"
							: `rgba(136, 209, 138, 100)`,
						trailColor: "#13293D",
					})}
					value={percentage}
					text={`${minutes}:${seconds.toString().padStart(2, "0")}`}
				/>
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
