"use client";
import "react-circular-progressbar/dist/styles.css";
import React, { useEffect, useState } from "react";
import { ITimer, timerState } from "../typing";
import { useAppDispatch } from "../redux/store";
import { setMode, setTicking } from "../redux/features/timerSlice";
import { twMerge } from "tailwind-merge";
import { calculatePercentage, getStyle } from "../helpers/PercentageCalc";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Button } from "@/components/ui/button";

export function Timer({ isTicking, timerMode }: ITimer) {
	const [minutes, setMinutes] = useState(25);
	const [seconds, setSeconds] = useState(0);
	const [percentage, setPercentage] = useState(0);

	const dispatch = useAppDispatch();

	const clockTicking = () => {
		if (minutes === 0 && seconds === 0) {
			if (timerMode === timerState.Work) {
				setMinutes(5);
				dispatch(setMode(1));
				setPercentage(0);
			}

			if (timerMode === timerState.Rest) {
				setMinutes(25);
				dispatch(setMode(0));
				setPercentage(0);
			}
			// setFinishedCount((prev) => prev + 1);
		} else if (seconds === 0) {
			setMinutes((minute) => minute - 1);
			setSeconds(59);
		} else {
			setSeconds((second) => second - 1);
		}
	};

	useEffect(() => {
		const clock = setInterval(() => {
			if (isTicking) {
				setPercentage(calculatePercentage(minutes + seconds * 0.01, timerMode));
				clockTicking();
			}
		}, 1000);

		return () => {
			clearInterval(clock);
		};
	}, [seconds, minutes, isTicking]);

	return (
		<div className="flex h-[55vh] flex-col items-center gap-8 xl:h-auto xl:w-[55%]">
			<div className="w-full text-8xl font-extrabold">
				<CircularProgressbar
					styles={buildStyles(getStyle({ isTicking, timerMode }))}
					value={percentage}
					text={`${minutes}:${seconds.toString().padStart(2, "0")}`}
				/>
			</div>

			<Button
				className={twMerge(isTicking && "bg-[#C20114] text-white")}
				variant={"pomodoro"}
				size={"pomodoro"}
				onClick={() => {
					dispatch(setTicking());
				}}
			>
				{isTicking ? "Stop" : "Start"}
			</Button>
		</div>
	);
}
