import React from "react";
import { LoginButton } from "./Forms/Login/LoginDialog";
import { SettingsButton } from "./SettingsButton";

export function Navbar() {
	return (
		<nav className="flex w-[90vw] items-center justify-between py-5 font-bold tracking-wide xl:w-1/3">
			<div className="flex items-center gap-3">
				<span className="material-symbols-outlined mb-0.5">alarm_on</span>
				<h1>Tempo Orbit</h1>
			</div>
			<ul className="flex items-center gap-4">
				<li>
					<SettingsButton />
				</li>
				<li>
					<LoginButton />
				</li>
			</ul>
		</nav>
	);
}
