import { Timer } from "@/app/components/Timer";
import { Navbar } from "@/app/components/navbar";

export default function Home() {
	return (
		<main className="bg-[#13293D]">
			<Navbar />
			<section className="h-screen flex flex-col items-center mt-10 gap-20">
				<Timer />

				<div className="w-1/5 flex flex-col gap-5">
					<h2 className="border-b text-center p-3">Task</h2>
					<div className="bg-white p-3 rounded-md">Add Task</div>
				</div>
			</section>
		</main>
	);
}
