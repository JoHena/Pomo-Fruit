import { Timer } from "@/app/components/Timer";
import { Navbar } from "@/app/components/navbar";

export default function Home() {
	return (
		<main className="bg-[#13293D]">
			<Navbar />
			<section className="h-screen flex flex-col items-center gap-20 font-bold">
				<Timer />

				<div className="w-1/3 flex flex-col gap-5">
					<h2 className="border-b text-center p-3">Task</h2>
					<div className="p-3 rounded-md border-white	border flex justify-between text-l">
						Add Task <span className="text-xl">+</span>
					</div>
				</div>
			</section>

			<section className="bg-white text-black flex flex-col items-center text-xl">
				<div className="w-1/3 py-10">
					<h2>What is the pomodoro Technique</h2>
					<p className="text-justify">
						The Pomodoro Technique is a time management method developed by
						Francesco Cirillo in the late 1980s. It uses a kitchen timer to
						break work into intervals, typically 25 minutes in length, separated
						by short breaks.
					</p>
				</div>
			</section>
		</main>
	);
}
