"use server";

import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByEmail } from "@/data/verificationToken";
import { error } from "console";

export const VerifyEmail = async (email: string, token: string) => {
	const existingToken = await getVerificationTokenByEmail(email);

	if (!existingToken) {
		return { error: "Token does not exist." };
	}

	const hasExpired = new Date(existingToken.expires) < new Date();

	if (hasExpired) {
		return { error: "Token has expired!" };
	}

	const existingUser = await getUserByEmail(existingToken.email);

	if (!existingUser) {
		return { error: "Email does not exist." };
	}

	await db.user.update({
		where: {
			id: existingUser.id,
		},
		data: {
			emailVerified: new Date(),
			email: existingToken.email,
		},
	});
};
