import React from "react";

export function Navbar({}) {
	return (
		<div className="flex justify-center py-5">
			<nav className="flex items-center justify-between w-1/3">
				<div>Pomodoro</div>
				<ul className="flex gap-8">
					<li>Settings</li>
					<li>Login</li>
				</ul>
			</nav>
		</div>
	);
}
