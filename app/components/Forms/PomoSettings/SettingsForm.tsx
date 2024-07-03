import { NumberInput } from "./NumberInput";
import { Button } from "@/components/ui/button";
import { LabeledSwitch } from "./LabeledSwitch";
import { Section } from "./Section";
import { useAppSelector, useAppDispatch } from "@/app/redux/store";
import { useForm } from "react-hook-form";
import { SettingSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { timerState } from "@/app/typing";
import { changeTime, setMode } from "@/app/redux/features/timerSlice";
import FormError from "../FormError";
import z from "zod";

export function SettingsForm({
	setOpen,
}: {
	setOpen: (isOpen: boolean) => void;
}) {
	const { modeTime, timerMode } = useAppSelector(
		(state) => state.timerReducer.value,
	);
	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<z.infer<typeof SettingSchema>>({
		resolver: zodResolver(SettingSchema),
		defaultValues: {
			workTime: modeTime[timerState.Work],
			restTime: modeTime[timerState.Rest],
			longRestTime: modeTime[timerState.LongRest],
		},
	});

	return (
		<form
			className="flex flex-col items-start gap-8 py-4 font-bold"
			onSubmit={handleSubmit((data) => {
				dispatch(
					changeTime({
						0: data.workTime,
						1: data.restTime,
						2: data.longRestTime,
					}),
				);

				dispatch(setMode(timerMode));
				setOpen(false);
			})}
		>
			<Section
				title={
					<div>
						Time
						<span className="ml-1 text-muted-foreground">(minutes)</span>
					</div>
				}
			>
				<div className="mb-3 flex items-center gap-5">
					<NumberInput
						label="Work"
						id="workTime"
						register={{ ...register("workTime", { required: true }) }}
					/>

					<NumberInput
						label="Rest"
						id="restTime"
						register={{ ...register("restTime", { required: true }) }}
					/>

					<NumberInput
						label="Long Rest"
						id="LongRest"
						register={{ ...register("longRestTime", { required: true }) }}
					/>
				</div>

				<FormError className="mt-3" message={errors.workTime?.message} />
				<FormError className="mt-3" message={errors.restTime?.message} />
				<FormError className="mt-3" message={errors.longRestTime?.message} />
			</Section>

			<Section title="Tasks - (WIP)">
				<LabeledSwitch id="auto-check" label="Auto Check Task" />
				<LabeledSwitch id="auto-check" label="Auto Switch Task" />
				<LabeledSwitch id="auto-start-w" label="Auto Start Work" />
				<LabeledSwitch id="auto-start-r" label="Auto Start Rest" />
			</Section>

			<Section title="Customization - (WIP)">
				<div>Work Color</div>
				<div>Rest Color</div>
			</Section>

			<Button className="mt-6 self-end" type="submit">
				Save
			</Button>
		</form>
	);
}
