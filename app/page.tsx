import { Navbar } from "@/app/components/navbar";
import { Pomodoro } from "./components/Pomodoro";

export default function Home() {
	return (
		<main>
			<Navbar />
			<Pomodoro />

			<section className="bg-white text-black flex flex-col gap-10 items-center text-xl py-10 font-normal">
				<div className="w-1/3">
					<h2 className="mb-8 font-bold">
						<span className="border-b-4 border-orange-400 pb-3">What</span> is
						the pomodoro Technique
					</h2>
					<p className="text-justify">
						The Pomodoro Technique is a time management method developed by
						Francesco Cirillo in the late 1980s. It uses a kitchen timer to
						break work into intervals, typically 25 minutes in length, separated
						by short breaks.
					</p>
				</div>

				<div className="w-1/3">
					<h2 className="mb-8 font-bold">
						<span className="border-b-4 border-orange-400 pb-3">How</span> to
						use the Pomodoro Timer.
					</h2>
					<ul className="list-disc list-inside ml-8 *:my-3 marker:text-orange-500">
						<li>Add tasks to work on today.</li>
						<li>Set estimate pomodoros (1 = 25min of work) for each tasks</li>
						<li>Select a task to work on</li>
						<li>Start timer and focus on the task for 25 minutes</li>
						<li>Take a break for 5 minutes when the alarm ring</li>
						<li>Iterate 3-5 until you finish the tasks</li>
					</ul>
				</div>
			</section>
		</main>
	);
}
