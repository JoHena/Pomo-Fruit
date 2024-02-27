import React from "react";

export function Navbar() {
	return (
		<nav className="flex justify-between w-[90vw] py-5 font-bold tracking-wide items-center">
			<div className="flex items-center gap-3">
				<span className="material-symbols-outlined mb-0.5">alarm_on</span>
				<h1>Tempo Orbit</h1>
			</div>
			<ul className="flex gap-8 items-center">
				<li className="hidden xl:block">Settings</li>
				<li>
					<span className="material-symbols-outlined bg-PomoActive bg-opacity-40 rounded-lg p-0.5">
						settings
					</span>
				</li>
				<li className="hidden xl:block">Login</li>
				<li>
					<span className="material-symbols-outlined bg-PomoActive bg-opacity-40 rounded-lg p-0.5">
						account_circle
					</span>
				</li>
			</ul>
		</nav>
	);
}
