import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SettingsButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost">Settings</Button>
			</DialogTrigger>

			<DialogContent className="text-black sm:max-w-[350px]">
				<DialogHeader>
					<DialogTitle>Settings</DialogTitle>
					<DialogDescription>
						Everyone works differently! Adjust the timer to your liking.
					</DialogDescription>
				</DialogHeader>

				<div className="flex flex-col items-start gap-5 py-4">
					<Label htmlFor="name" className="text-right">
						Work Time
					</Label>
					<Input id="name" value="25" type="number" className="col-span-3" />

					<Label htmlFor="username" className="text-right">
						Rest Time
					</Label>
					<Input id="username" value="5" className="col-span-3" />

					<Label htmlFor="username" className="text-right">
						Work Color
					</Label>
					<Input id="username" value="5" className="col-span-3" />

					<Label htmlFor="username" className="text-right">
						Rest Color
					</Label>
					<Input id="username" value="5" className="col-span-3" />
				</div>
			</DialogContent>
		</Dialog>
	);
}
