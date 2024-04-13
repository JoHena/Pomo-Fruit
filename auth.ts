import NextAuth, { DefaultSession } from "next-auth";
import { getUserById } from "./data/user";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/lib/db";
import authConfig from "@/auth.config";

/**
 * Extention for session user properties.
 * @type DefaultSession["user"]
 */
export type ExtendedUser = DefaultSession["user"] & {
	stats: string;
};

declare module "next-auth" {
	interface Session {
		user: ExtendedUser;
	}
}

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	pages: {
		signIn: "/",
		error: "/auth/error",
	},
	events: {
		async linkAccount({ user }) {
			// Set email as verified when linking account from a 0Auth Provider
			await db.user.update({
				where: { id: user.id },
				data: {
					emailVerified: new Date(),
				},
			});
		},
	},
	callbacks: {
		async session({ token, session }) {
			if (token.sub && session.user) {
				session.user.id = token.sub;
			}
			return session;
		},
		async jwt({ token }) {
			if (!token.sub) return token;

			const user = await getUserById(token.sub);

			if (!user) return token;

			//TODO add props to user

			return token;
		},
	},
	adapter: PrismaAdapter(db),
	session: { strategy: "jwt" },
	...authConfig,
});
