import * as React from "react";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { RegisterForm } from "./RegisterForm";
import Link from "next/link";

export function RegisterCard() {
	return (
		<Card className="w-[350px] shadow-md">
			<CardHeader>
				<CardTitle>Register</CardTitle>
				<CardDescription>Welcome!</CardDescription>
			</CardHeader>
			<CardContent className="flex flex-col items-center justify-center gap-6">
				<RegisterForm />
				<Link
					href={"/"}
					className="w-fit border-b border-b-transparent text-center text-sm hover:border-b-black"
				>
					Already have an account?
				</Link>
			</CardContent>
		</Card>
	);
}
