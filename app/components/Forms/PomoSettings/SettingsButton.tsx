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
import { useState } from "react";

export function SettingsButton() {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="main">
					<div className="hidden xl:block">Settings</div>
					<span className="material-symbols-outlined rounded-lg p-0.5 xl:hidden">
						settings
					</span>
				</Button>
			</DialogTrigger>

			<DialogContent
				className="text-black sm:max-w-[365px]"
				onOpenAutoFocus={(e) => e.preventDefault()}
			>
				<DialogHeader>
					<DialogTitle className="text-center">Settings</DialogTitle>
					<DialogDescription className="text-center">
						Everyone works differently!
					</DialogDescription>
				</DialogHeader>

				<SettingsForm setOpen={setOpen} />
			</DialogContent>
		</Dialog>
	);
}
