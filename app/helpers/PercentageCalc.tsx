import { ITimer, timerState } from "../typing";

export function calculatePercentage(
	minutes: number,
	seconds: number,
	totalTimeInMinutes: number,
) {
	var totalTimeInHours = totalTimeInMinutes / 60;

	var percentage =
		((totalTimeInHours - (minutes / 60 + seconds / 3600)) / totalTimeInHours) *
		100;

	return percentage;
}

export function getStyle({ isTicking, timerMode }: ITimer) {
	let timerStyle = {
		textColor: isTicking ? "#13293D" : "white",
		pathColor: isTicking ? "white" : "rgba(136, 209, 138, 100)",
		trailColor: "transparent",
	};

	if (timerMode !== timerState.Work) {
		timerStyle = {
			textColor: "white",
			pathColor: "#00",
			trailColor: "#13293D",
		};
	}

	return timerStyle;
}
