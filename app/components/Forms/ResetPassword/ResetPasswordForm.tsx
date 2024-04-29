"use client";
import { ResetSchema } from "@/schemas";
import { resetPassword } from "@/actions/reset";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useTransition } from "react";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import z from "zod";
import FormError from "../FormError";
import FormSuccess from "../FormSuccess";

export function ResetForm() {
	const [response, setResponse] = useState<{
		error: boolean;
		message: string;
	}>();

	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof ResetSchema>>({
		resolver: zodResolver(ResetSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = (values: z.infer<typeof ResetSchema>) => {
		console.log(values);
		resetPassword(values).then((data) => {
			setResponse(data);
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
				<div className="space-y-6">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
										placeholder="john.doe@example.com"
										type="email"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				{response?.error ? (
					<FormError message={response?.message} />
				) : (
					<FormSuccess message={response?.message} />
				)}

				<Button type="submit" className="w-full" disabled={isPending}>
					Reset
				</Button>
			</form>
		</Form>
	);
}
