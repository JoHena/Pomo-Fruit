"use client";
import "react-circular-progressbar/dist/styles.css";
import React, { useEffect } from "react";
import { IPomodoro, timerState } from "../typing";
import { useAppDispatch } from "../redux/store";
import { setMode, setTicking, updateTimer } from "../redux/features/timerSlice";
import { finishTask } from "../redux/features/taskSlice";
import { twMerge } from "tailwind-merge";
import { getStyle } from "../helpers/PercentageCalc";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Button } from "@/components/ui/button";
import { TaskCounter } from "./Tasks/TaskCounter";
import { ModeSelector } from "./ModeSelector";

export function Timer({
	isTicking,
	timerMode,
	minutes,
	seconds,
	percentage,
}: IPomodoro) {
	const dispatch = useAppDispatch();

	const clockTicking = () => {
		if (minutes === 0 && seconds === 0) {
			if (timerMode === timerState.Work) {
				dispatch(setMode(1));
				dispatch(finishTask());
			}

			if (timerMode === timerState.Rest) {
				dispatch(setMode(0));
			}
		} else {
			dispatch(updateTimer());
		}
	};

	useEffect(() => {
		const clock = setInterval(() => {
			if (isTicking) {
				clockTicking();
			}
		}, 1);

		return () => {
			clearInterval(clock);
		};
	}, [seconds, minutes, isTicking]);

	return (
		<div className="flex w-full flex-col items-center gap-8 lg:h-auto">
			<ModeSelector timerMode={timerMode} />

			<div className="w-full text-8xl font-extrabold md:w-[60%]">
				<CircularProgressbar
					styles={buildStyles(getStyle({ isTicking, timerMode }))}
					value={percentage}
					text={`${minutes}:${seconds.toString().padStart(2, "0")}`}
				/>
			</div>

			<div className="flex w-[90%] flex-col items-center gap-8">
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

				<TaskCounter isTicking={isTicking} timerMode={timerMode} />
			</div>
		</div>
	);
}
