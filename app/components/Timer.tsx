"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { twMerge } from "tailwind-merge";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { calculatePercentage, getStyle } from "../helpers/PercentageCalc";
import { timerState } from "../typing";
import "react-circular-progressbar/dist/styles.css";

interface ITimer {
	timer: {
		ticking: boolean;
		mode: timerState;
	};
	setTicking: React.Dispatch<
		React.SetStateAction<{
			ticking: boolean;
			mode: timerState;
		}>
	>;
	setFinishedCount: React.Dispatch<React.SetStateAction<number>>;
}

export function Timer({ timer, setTicking, setFinishedCount }: ITimer) {
	const [minutes, setMinutes] = useState(25);
	const [seconds, setSeconds] = useState(0);
	const [percentage, setPercentage] = useState(0);

	const clockTicking = () => {
		if (minutes === 0 && seconds === 0) {
			if (timer.mode === timerState.Work) {
				setMinutes(5);
				setTicking({
					ticking: false,
					mode: timerState.Rest,
				});
				setPercentage(0);
			}

			if (timer.mode === timerState.Rest) {
				setMinutes(25);
				setTicking({
					ticking: false,
					mode: timerState.Work,
				});
				setPercentage(0);
			}
			setFinishedCount((prev) => prev + 1);
		} else if (seconds === 0) {
			setMinutes((minute) => minute - 1);
			setSeconds(59);
		} else {
			setSeconds((second) => second - 1);
		}
	};

	useEffect(() => {
		const clock = setInterval(() => {
			if (timer.ticking) {
				setPercentage(
					calculatePercentage(minutes + seconds * 0.01, timer.mode),
				);
				clockTicking();
			}
		}, 10);

		return () => {
			clearInterval(clock);
		};
	}, [seconds, minutes, timer.ticking]);

	return (
		<div className="flex h-[55vh] flex-col items-center gap-8 xl:h-auto xl:w-[55%]">
			<div className="w-full text-8xl font-extrabold">
				<CircularProgressbar
					styles={buildStyles(getStyle(timer))}
					value={percentage}
					text={`${minutes}:${seconds.toString().padStart(2, "0")}`}
				/>
			</div>

			<Button
				className={twMerge(timer.ticking && "bg-[#C20114] text-white")}
				variant={"pomodoro"}
				size={"pomodoro"}
				onClick={() =>
					setTicking({
						...timer,
						ticking: !timer.ticking,
					})
				}
			>
				{timer.ticking ? "Stop" : "Start"}
			</Button>
		</div>
	);
}
