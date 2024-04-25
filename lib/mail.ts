import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (email: string, token: string) => {
	const confirmationLink = `http:://${process.env.domain}/auth/verification?token=${token}`;

	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: email,
		subject: "Verify your email",
		html: `<p>Thank you for registering! please verify your email <a href="${confirmationLink}">here</a> </p> `,
	});
};
