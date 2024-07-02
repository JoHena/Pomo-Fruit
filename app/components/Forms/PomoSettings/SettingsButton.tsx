import { SettingsForm } from "./SettingsForm";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export function SettingsButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="main">
					<div className="hidden xl:block">Settings</div>
					<span className="material-symbols-outlined rounded-lg p-0.5 xl:hidden">
						settings
					</span>
				</Button>
			</DialogTrigger>

			<DialogContent className="text-black sm:max-w-[365px]">
				<DialogHeader>
					<DialogTitle className="text-center">Settings</DialogTitle>
					<DialogDescription className="text-center">
						Everyone works differently!
					</DialogDescription>
				</DialogHeader>

				<SettingsForm />
			</DialogContent>
		</Dialog>
	);
}
