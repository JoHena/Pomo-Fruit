import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormRegisterReturn } from "react-hook-form";

interface INumberInput {
	label: string;
	id: string;
	register: UseFormRegisterReturn;
}

export function NumberInput({ label, id, register }: INumberInput) {
	return (
		<div className="flex flex-col items-center gap-2">
			<Label htmlFor={id} className="text-center">
				{label}
			</Label>
			<Input {...register} id={id} />
		</div>
	);
}
