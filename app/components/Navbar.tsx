import React, { useEffect } from "react";
import { LoginButton } from "./Forms/Login/LoginDialog";
import { SettingsButton } from "./Forms/PomoSettings/SettingsButton";
import { auth } from "@/auth";
import { AvatarDropDown } from "./AvatarDropDown";
import Link from "next/link";
import { useCurrentUser } from "@/hooks/current-user";

export function Navbar() {
	const session = useCurrentUser();

	return (
		<nav className="flex w-[90vw] items-center justify-between py-5 font-bold tracking-wide xl:w-1/3">
			<div className="flex items-center gap-3">
				<span className="material-symbols-outlined mb-0.5">alarm_on</span>
				<h1>Time Tomato</h1>
			</div>
			<ul className="flex items-center gap-4">
				<li>
					<SettingsButton />
				</li>
				{session ? (
					<>
						<li>
							<Link
								className="rounded px-4 py-2 text-sm font-semibold hover:bg-accent hover:text-accent-foreground"
								href={"/stats"}
							>
								Stats
							</Link>
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
