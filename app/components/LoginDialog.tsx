import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export function LoginButton() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost">Login</Button>
			</DialogTrigger>

			<DialogContent className="text-black sm:max-w-[425px]">
				<div className="flex flex-col items-center gap-5">
					<DialogHeader>
						<DialogTitle>Login</DialogTitle>
					</DialogHeader>

					<Button
						className="w-2/3 rounded-lg bg-white p-4 shadow-md transition-all duration-100 hover:border hover:bg-white"
						type="button"
					>
						<FaGithub size={22} className="fill-black" />
					</Button>

					<Button
						className="w-2/3 rounded-lg bg-PomoInActive p-4 shadow-md transition-all duration-100 hover:border hover:bg-white"
						type="button"
					>
						<FcGoogle size={"22"} />
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	);
}
