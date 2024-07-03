import z from "zod";

export const LoginSchema = z.object({
	email: z.string().email({
		message: "Email is required",
	}),
	password: z.string().min(1, {
		message: "Password is required",
	}),
});

export const SettingSchema = z.object({
	workTime: z.coerce
		.number({ invalid_type_error: "Work: Invalid input." })
		.positive()
		.int(),
	restTime: z.coerce
		.number({ invalid_type_error: "Rest: Invalid input." })
		.positive()
		.int(),
	longRestTime: z.coerce
		.number({ invalid_type_error: "Long Rest: Invalid input." })
		.positive()
		.int(),
});

export const RegisterSchema = z.object({
	email: z.string().email({
		message: "Email is required.",
	}),
	password: z.string().min(6, {
		message: "Minimum of 6 characters are required.",
	}),
	userName: z.string().min(1, {
		message: "Username is required",
	}),
});

export const ResetSchema = z.object({
	email: z.string().email({
		message: "Email is required.",
	}),
});
