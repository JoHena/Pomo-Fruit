import { useState, ChangeEvent } from "react";

type FormStateType<T> = {
	[K in keyof T]: T[K];
};

export const useForm = <T extends FormStateType<T>>(
	initialForm: T
): {
	formState: FormStateType<T>;
	onInputChange: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	setFormState: React.Dispatch<React.SetStateAction<FormStateType<T>>>;
} => {
	const [formState, setFormState] = useState<FormStateType<T>>(initialForm);

	const onInputChange = ({
		target,
	}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value,
		});
	};

	return {
		...formState,
		formState,
		onInputChange,
		setFormState,
	};
};
