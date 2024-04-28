"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import FormError from "@/app/components/Forms/FormError";
import { VerifyEmail } from "@/actions/verification";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import { FormMessage } from "@/components/ui/form";
import FormSuccess from "@/app/components/Forms/FormSuccess";

export default function Register() {
	const [error, setError] = useState<string | undefined>();
	const [success, setSuccess] = useState<string | undefined>();
	const searchParams = useSearchParams();
	const token = searchParams.get("token");

	const onSubmit = useCallback(() => {
		if (!token) {
			setError("Missing token");
			return;
		}

		VerifyEmail(token)
			.then((data) => {
				setSuccess(data.sucess);
				setError(data.error);
			})
			.catch(() => {
				setError("Something went wrong");
			});
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
					<FormError message={error} />
					<FormSuccess message={success} />
					<ScaleLoader color="#88D18A" height={15} />
				</CardContent>
			</Card>
		</div>
	);
}
