import FormError from "@/app/components/Forms/FormError";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { FaExclamationTriangle } from "react-icons/fa";

export default function ErrorPage() {
	return (
		<div className="flex h-screen items-center justify-center">
			<Card className="w-[350px] shadow-md">
				<CardHeader>
					<CardTitle className="border-b border-black pb-3">Oh no!</CardTitle>
					<FormError message="Something went wrong!" />
				</CardHeader>
			</Card>
		</div>
	);
}
