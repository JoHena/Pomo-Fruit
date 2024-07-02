import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { LabeledSwitch } from "./LabeledSwitch";
import { Section } from "./Section";

export function SettingsForm({}) {
	return (
		<form className="flex flex-col items-start gap-8 py-4 font-bold">
			<Section
				title={
					<div>
						Time
						<span className="ml-1 text-muted-foreground">(minutes)</span>
					</div>
				}
			>
				<div className="flex items-center gap-5">
					<div className="flex flex-col items-center gap-2">
						<Label htmlFor="workTime" className="text-center">
							Work
						</Label>
						<Input id="workTime" type="number" className="col-span-3" />
					</div>

					<div className="flex flex-col items-center gap-2">
						<Label htmlFor="rest" className="text-right">
							Rest
						</Label>
						<Input id="rest" type="number" className="col-span-3" />
					</div>

					<div className="flex flex-col items-center gap-2">
						<Label htmlFor="longRest" className="text-right">
							Long Rest
						</Label>
						<Input id="longRest" type="number" className="col-span-3" />
					</div>
				</div>
			</Section>

			<Section title="Tasks - (WIP)">
				<LabeledSwitch id="auto-check" label="Auto Check Task" />
				<LabeledSwitch id="auto-check" label="Auto Switch Task" />
			</Section>

			<Section title="Customization - (WIP)">
				<div>Work Color</div>
				<div>Rest Color</div>
			</Section>

			<Button className="mt-6 self-end">Save</Button>
		</form>
	);
}
