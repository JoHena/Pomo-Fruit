"use client";

import { PomoCard } from "@/app/components/Card";

import FormError from "@/app/components/Forms/FormError";
import { VerifyEmail } from "@/actions/verification";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";
import FormSuccess from "@/app/components/Forms/FormSuccess";

export function EmailVerification() {
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
		<PomoCard
			cardClass={!success && !error ? "h-[152px] animate-pulse" : "h-[152px]"}
			title={<div className="text-xl text-PomoInActive">Welcome!</div>}
			description={!success && !error && "Verifing your email..."}
		>
			{!success && !error && <ScaleLoader color="#88D18A" height={15} />}
			<FormError message={error} />
			<FormSuccess message={success} />
		</PomoCard>
	);
}
