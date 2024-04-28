import { FaCheckCircle } from "react-icons/fa";

interface IFormSuccess {
	message?: string;
}

export default function FormSuccess({ message }: IFormSuccess) {
	if (!message) return null;

	return (
		<div className="flex w-full items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500">
			<FaCheckCircle className="h-4 w-4" />
			<p>{message}</p>
		</div>
	);
}
