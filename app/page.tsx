import { Pomodoro } from "./components/Pomodoro";

export default function Home() {
	return (
		<main>
			<Pomodoro />

			<section className="flex snap-start flex-col items-center bg-white py-10 text-base font-light text-black xl:text-lg">
				<div className="flex w-[90vw] flex-col gap-10 xl:w-1/3">
					<h2 className="text-4xl font-bold">
						An online Pomodoro Timer to boost your productivity.
					</h2>

					<div>
						<h3 className="mb-8 font-bold">
							<span className="border-b-4 border-orange-400 pb-3">What</span> is
							the pomodoro Technique
						</h3>
						<p className="text-justify">
							The Pomodoro Technique is a time management method developed by
							Francesco Cirillo in the late 1980s. It uses a kitchen timer to
							break work into intervals, typically 25 minutes in length,
							separated by short breaks.
						</p>
					</div>

					<div>
						<h3 className="mb-8 font-bold">
							<span className="border-b-4 border-orange-400 pb-3">How</span> to
							use the Pomodoro Timer.
						</h3>
						<ul className="list-disc pl-6 *:my-3 marker:text-orange-500 xl:ml-8">
							<li>Add tasks to work on today.</li>
							<li>
								Set estimate pomodoros (1 = 25min of work) for each tasks.
							</li>
							<li>
								Order your tasks from top to bottom in the order you wish to
								tackle them.
							</li>
							<li>
								Start the timer and focus on the task for the set time. <br />
								<span className="font-bold">
									(Finished early? Stop the timer and continue on to your next
									Task!)
								</span>
							</li>
							<li>
								Take a break for 5 minutes (or your preffered time) when the
								alarm rings.
							</li>
							<li>Iterate 3-5 until you finish the tasks.</li>
						</ul>
					</div>

					<div>
						<h4 className="mb-8 font-bold">
							<span className="border-b-4 border-orange-400 pb-3">Stat</span>{" "}
							Tracking
						</h4>
						<p className="text-justify">
							Once logged in, your productivity journey will be meticulously
							tracked. Access insights into your time spent on the app, track
							the number of tasks completed, and gauge your efficiency by
							viewing task completion times on your stats!
						</p>
					</div>
				</div>
			</section>

			<footer className="flex flex-col items-center gap-5 border-t bg-white p-8 font-normal text-black">
				<div className="flex gap-5 font-semibold text-PomoInActive">
					<div>Home</div>
					<div>Privacy</div>
					<div>Terms</div>
					<div>Contact</div>
				</div>
				<div className="italic">
					Made by <span className="font-bold">John</span>
				</div>
			</footer>
		</main>
	);
}
