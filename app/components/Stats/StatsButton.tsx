import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

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
				className="text-black sm:max-w-[365px]"
				onOpenAutoFocus={(e) => e.preventDefault()}
			>
				<DialogHeader>
					<DialogTitle className="text-center">Stats</DialogTitle>
					<DialogDescription className="text-center">
						Check up on how you&apos;re doing! <br /> (In-Development)
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
