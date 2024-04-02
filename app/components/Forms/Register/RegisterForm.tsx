"use client";
import { RegisterSchema } from "../../../schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { register } from "@/actions/register";
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

export function RegisterForm() {
	const [loginResponse, setLoginResponse] = useState<{
		error: boolean;
		message: string;
	}>();

	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
		startTransition(() => {
			register(values).then((data) => {
				setLoginResponse(data);
			});
		});
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
				<div className="space-y-6">
					<FormField
						control={form.control}
						name="userName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>User name</FormLabel>
								<FormControl>
									<Input
										{...field}
										disabled={isPending}
										placeholder="John"
										type="text"
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

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

					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<Input
										{...field}
										placeholder="******"
										type="password"
										disabled={isPending}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				{loginResponse?.error ? (
					<FormError message={loginResponse?.message} />
				) : (
					<FormSuccess message={loginResponse?.message} />
				)}

				<div className="flex justify-between">
					<Button type="submit" className="w-full" disabled={isPending}>
						Create an account
					</Button>
				</div>
			</form>
		</Form>
	);
}
