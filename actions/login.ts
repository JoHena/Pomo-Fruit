"use server";

import { LoginSchema } from "@/app/schemas";
import z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
	const validateFields = LoginSchema.safeParse(values);

	if (!validateFields.success) {
		return { error: true, message: "Invalid Fields!" };
	}

	return { error: false, message: "Login succesful!" };
};
