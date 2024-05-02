import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

export function ErrorPopup() {
	const searchParams = useSearchParams();
	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (searchParams.get("error") === "OAuthAccountNotLinked") {
			setOpen(true);
			setMessage("Email already in use with a different provider!");
		}
	}, []);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className="border-none bg-destructive text-white sm:max-w-[350px]">
				<DialogHeader>
					<DialogTitle>Oops!</DialogTitle>
				</DialogHeader>
				<div className="flex w-full items-center gap-x-5 p-3 text-sm">
					<FaExclamationTriangle className="h-4 w-4" />
					<p>{message}</p>
				</div>
			</DialogContent>
		</Dialog>
	);
}
