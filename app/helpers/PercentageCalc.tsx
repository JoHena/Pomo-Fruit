import { timerState } from "../typing";

export function calculatePercentage(time: number, timer: timerState) {
	// Slope of the line
	let slope = 0;

	if (timer === timerState.Work) {
		slope = -100 / 25; // change in y / change in x
	}

	if (timer === timerState.Rest) {
		slope = -100 / 5; // change in y / change in x
	}

	// Y-intercept
	var yIntercept = 100;

	// Calculate the percentage
	var percentage = slope * time + yIntercept;

	return percentage;
}

export function getStyle({
	ticking,
	mode,
}: {
	ticking: boolean;
	mode: timerState;
}) {
	let timerStyle = {
		textColor: ticking ? "#13293D" : "white",
		pathColor: ticking ? "rgba(217, 219, 241, 1)" : "rgba(136, 209, 138, 100)",
		trailColor: "#13293D",
	};

	if (mode === timerState.Rest) {
		timerStyle = {
			textColor: "white",
			pathColor: "rgba(136, 209, 138, 100)",
			trailColor: "#13293D",
		};
	}

	return timerStyle;
}
