import React from "react";
import { LoginButton } from "./LoginDialog";
import { SettingsButton } from "./SettingsButton";

export function Navbar() {
	return (
		<nav className="flex w-[90vw] items-center justify-between py-5 font-bold tracking-wide xl:w-1/3">
			<div className="flex items-center gap-3">
				<span className="material-symbols-outlined mb-0.5">alarm_on</span>
				<h1>Tempo Orbit</h1>
			</div>
			<ul className="flex items-center gap-8 xl:gap-4">
				<li className="hidden xl:block">
					<SettingsButton />
				</li>
				<li className="xl:hidden">
					<span className="material-symbols-outlined rounded-lg bg-PomoActive bg-opacity-40 p-0.5">
						settings
					</span>
				</li>
				<li className="hidden xl:block">
					<LoginButton />
				</li>
				<li className="xl:hidden">
					<span className="material-symbols-outlined rounded-lg bg-PomoActive bg-opacity-40 p-0.5">
						account_circle
					</span>
				</li>
			</ul>
		</nav>
	);
}
