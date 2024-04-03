"use server";

import { LoginSchema } from "@/app/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
import { redirect } from "next/dist/server/api-utils";
import z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validateFields = LoginSchema.safeParse(values);

	if (!validateFields.success) {
		return { error: true, message: "Invalid Fields!" };
	}

	const { email, password } = validateFields.data;

	try {
		await signIn("credentials", {
			email,
			password,
			redirectTo: DEFAULT_LOGIN_REDIRECT,
		});
	} catch (error) {
		if (error instanceof AuthError) {
			switch (error.type) {
				case "CredentialsSignin":
					return { error: true, message: "Invalid Credentials!" };
				default:
					return { error: true, message: "Something went wrong!" };
			}
		}

		throw error;
	}
};
