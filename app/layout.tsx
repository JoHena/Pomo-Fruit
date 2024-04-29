import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/globalIcons.css";
import { ReduxProvider } from "./redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Pomodoro",
	description: "Pomodoro Timer",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`font-xl bg-PomoInActive font-semibold ${inter.className} no-scrollbar overflow-y-scroll`}
			>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
