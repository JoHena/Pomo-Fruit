"use server";

import { RegisterSchema } from "@/app/schemas";
import z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
	const validateFields = RegisterSchema.safeParse(values);

	if (!validateFields.success) {
		return { error: true, message: "Invalid Fields!" };
	}

	const { email, password, userName } = validateFields.data;
	const hashedPassword = await bcrypt.hash(password, 10);

	const existingUser = await getUserByEmail(email);

	if (existingUser) {
		return { error: true, message: "Email already in use!" };
	}

	await db.user.create({
		data: {
			name: userName,
			email,
			password: hashedPassword,
		},
	});

	//Todo send verification token email.

	return { error: false, message: "User created!" };
};
