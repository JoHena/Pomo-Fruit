export function calculatePercentage(time: number) {
	// Slope of the line
	var slope = -100 / 25; // change in y / change in x

	// Y-intercept
	var yIntercept = 100;

	// Calculate the percentage
	var percentage = slope * time + yIntercept;

	return percentage;
}
