import { PomoCard } from "../../Card";
import { RegisterForm } from "./RegisterForm";
import Link from "next/link";

export function RegisterCard() {
	return (
		<PomoCard title={"Register"} description={"Welcome!"}>
			<RegisterForm />
			<Link
				href={"/"}
				className="w-fit border-b border-b-transparent text-center text-sm hover:border-b-black"
			>
				Back to home page.
			</Link>
		</PomoCard>
	);
}
