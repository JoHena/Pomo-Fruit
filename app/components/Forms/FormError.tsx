import { FaExclamationTriangle } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface IFormError {
	className?: string;
	message?: string;
}

export default function FormError({ message, className }: IFormError) {
	if (!message) return null;

	return (
		<div
			className={twMerge(
				"flex w-full animate-[pulse_1s] items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive",
				className,
			)}
		>
			<FaExclamationTriangle className="h-4 w-4" />
			<p>{message}</p>
		</div>
	);
}
