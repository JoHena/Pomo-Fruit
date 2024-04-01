import { FaExclamationTriangle } from "react-icons/fa";

interface IFormError {
	message?: string;
}

export default function FormError({ message }: IFormError) {
	if (!message) return null;

	return (
		<div className="flex items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
			<FaExclamationTriangle className="h-4 w-4" />
			<p>{message}</p>
		</div>
	);
}
