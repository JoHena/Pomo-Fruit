import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { LoginForm } from "./LoginForm";
import Link from "next/link";

export function LoginButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost">Login</Button>
			</DialogTrigger>

			<DialogContent className="px-10 text-black sm:max-w-[425px]">
				<div className="flex flex-col items-center gap-6">
					<DialogHeader>
						<DialogTitle>Login</DialogTitle>
					</DialogHeader>

					<LoginForm />

					<hr className="w-full border border-PomoInActive" />

					<div className="flex w-full gap-5">
						<Button
							className="w-1/2 rounded-lg bg-white p-4 shadow-md transition-all duration-100 hover:border-2 hover:border-PomoInActive/20 hover:bg-white"
							type="button"
						>
							<FaGithub size={22} className="fill-black" />
						</Button>

						<Button
							className="w-1/2 rounded-lg bg-white p-4 shadow-md transition-all duration-100 hover:border-2 hover:border-PomoInActive/20 hover:bg-white"
							type="button"
						>
							<FcGoogle size={"22"} />
						</Button>
					</div>

					<Link
						href={""}
						className="w-fit border-b border-b-transparent text-center text-sm hover:border-b-black"
					>
						Don't have an account?
					</Link>
				</div>
			</DialogContent>
		</Dialog>
	);
}
