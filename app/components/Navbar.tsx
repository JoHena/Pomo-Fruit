import React from "react";
import { LoginButton } from "./Forms/Login/LoginDialog";
import { SettingsButton } from "./Forms/PomoSettings/SettingsButton";
import { AvatarDropDown } from "./AvatarDropDown";
import { useCurrentUser } from "@/hooks/current-user";

export function Navbar() {
	const session = useCurrentUser();

	return (
		<nav className="flex w-[90vw] items-center justify-between py-5 font-bold tracking-wide xl:w-1/3">
			<div className="flex items-center gap-3 shadow-md">
				<h1 className="rounded-sm bg-white bg-opacity-10 px-3 py-2">
					Pomo Fruit
				</h1>
			</div>
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
