import { StatBubble } from "./StatBubble";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { LineChartGraph } from "./HourChart";

export function StatsButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="main">
					<div className="hidden xl:block">Stats</div>
					<span className="material-symbols-outlined rounded-lg p-0.5 xl:hidden">
						monitoring
					</span>
				</Button>
			</DialogTrigger>

			<DialogContent
				className="max-w-[800px] text-black"
				onOpenAutoFocus={(e) => e.preventDefault()}
			>
				<DialogHeader>
					<DialogDescription className="text-center">
						Check up on how you&apos;re doing! <br /> (In-Development)
					</DialogDescription>
				</DialogHeader>

				<div className="flex flex-col text-center">
					<div className="mb-4 self-start">Activity</div>
					<div className="flex items-center gap-12">
						<StatBubble value={30} label="Hours Worked" />
						<StatBubble value={5} label="Day Streak" />
						<StatBubble value={2} label="Days Missed" />
					</div>
					<div className="my-6 self-start text-PomoInActive">Hours Focused</div>
					<LineChartGraph />
				</div>
			</DialogContent>
		</Dialog>
	);
}
