"use client";

import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
} from "recharts";

export function LineChartGraph() {
	const data = [
		{
			day: "Sunday",
			hours: 6,
		},
		{
			day: "Monday",
			hours: 0.5,
		},
		{
			day: "Tuesday",
			hours: 2,
		},
		{
			day: "Wendesday",
			hours: 0.2,
		},
		{
			day: "Thursday",
			hours: 0.9,
		},
		{
			day: "Friday",
			hours: 5,
		},
		{
			day: "Saturday",
			hours: 4,
		},
	];

	return (
		<div className="h-96 w-full">
			<ResponsiveContainer width="100%" height="100%" className="pr-10">
				<BarChart
					data={data}
					margin={{
						left: -20,
					}}
					className="text-sm"
				>
					<XAxis dataKey="day" />
					<YAxis dataKey="hours" />
					<CartesianGrid />
					<Bar dataKey="hours" fill="#88D18A" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
