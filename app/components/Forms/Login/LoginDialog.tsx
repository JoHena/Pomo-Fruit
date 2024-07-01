import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
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
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import Link from "next/link";

export function LoginButton() {
	const onClick = (provider: "google" | "github") => {
		signIn(provider, {
			callbackUrl: DEFAULT_LOGIN_REDIRECT,
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="main">
					<div className="hidden xl:block">Login</div>
					<span className="material-symbols-outlined rounded-lg p-0.5 xl:hidden">
						account_circle
					</span>
				</Button>
			</DialogTrigger>

			<DialogContent className="px-10 text-black sm:max-w-[350px]">
				<div className="flex flex-col items-center gap-6">
					<DialogHeader>
						<DialogTitle>Login</DialogTitle>
					</DialogHeader>

					<LoginForm />

					<hr className="w-full border border-PomoInActive" />

					<div className="flex w-full gap-5">
						<Button
							className="w-1/2 rounded-lg border-2 bg-white p-4 shadow-md transition-all duration-100 hover:border-PomoInActive/20 hover:bg-white"
							type="button"
							onClick={() => onClick("github")}
						>
							<FaGithub size={22} className="fill-black" />
						</Button>

						<Button
							className="w-1/2 rounded-lg border-2 bg-white p-4 shadow-md transition-all duration-100 hover:border-PomoInActive/20 hover:bg-white"
							type="button"
							onClick={() => onClick("google")}
						>
							<FcGoogle size={"22"} />
						</Button>
					</div>

					<Link
						href={"/register"}
						className="w-fit border-b border-b-transparent text-center text-sm hover:border-b-black"
					>
						Don&apos;t have an account?
					</Link>
				</div>
			</DialogContent>
		</Dialog>
	);
}
