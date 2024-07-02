import { Label } from "@radix-ui/react-label";
import { Switch } from "@/components/ui/switch";

interface ILabeledSwitch {
	id: string;
	label: string;
}

export function LabeledSwitch({ id, label }: ILabeledSwitch) {
	return (
		<div className="flex w-full items-center justify-between text-sm font-medium">
			<Label htmlFor={id}>{label}</Label>
			<Switch id={id} />
		</div>
	);
}
