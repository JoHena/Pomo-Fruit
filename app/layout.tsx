import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/globalIcons.css";
import { SessionProvider } from "next-auth/react";
import { ReduxProvider } from "./redux/provider";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Pomodoro",
	description: "Pomodoro Timer",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();

	return (
		<SessionProvider session={session}>
			<html lang="en" className="snap-none snap-proximity md:snap-y">
				<body
					className={`font-xl bg-white font-semibold ${inter.className} no-scrollbar overflow-y-scroll`}
				>
					<ReduxProvider>{children}</ReduxProvider>
				</body>
			</html>
		</SessionProvider>
	);
}
