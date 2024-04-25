"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect } from "react";
import { ScaleLoader } from "react-spinners";

export default function Register() {
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const onSubmit = useCallback(() => {
		console.log(token);
	}, [token]);

	useEffect(() => {
		onSubmit();
	}, [onSubmit]);

	return (
		<div className="flex h-screen items-center justify-center">
			<Card className="w-[350px] shadow-md">
				<CardHeader>
					<CardTitle className="text-xl text-PomoInActive">
						Welcome, we're almost done.
					</CardTitle>
					<CardDescription>Verifying your email...</CardDescription>
				</CardHeader>
				<CardContent className="flex w-full flex-col items-center justify-center gap-6">
					<ScaleLoader color="#88D18A" height={15} />
				</CardContent>
			</Card>
		</div>
	);
}
