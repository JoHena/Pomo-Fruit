import React from "react";
import { LoginButton } from "./Forms/Login/LoginDialog";
import { SettingsButton } from "./Forms/PomoSettings/SettingsButton";
import { AvatarDropDown } from "./AvatarDropDown";
import { useCurrentUser } from "@/hooks/current-user";

export function Navbar() {
	const session = useCurrentUser();

	return (
		<nav className="flex w-[90vw] items-center justify-between py-5 font-bold tracking-wide xl:w-1/3">
			<h1 className="flex items-center px-3 py-2 text-xl font-bold ">
				Pomo Fruit
			</h1>
			<ul className="flex items-center gap-4">
				<li>
					<SettingsButton />
				</li>
				{session ? (
					<>
						<li>
							<SettingsButton />
						</li>
						<li>
							<AvatarDropDown name={session.name} image={session.image} />
						</li>
					</>
				) : (
					<>
						<li>
							<LoginButton />
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}
