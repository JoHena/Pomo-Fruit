export const publicRoutes = ["/", "/auth/verification"];

/**
 * Array of routes used for authentication.
 * These routes will redirect logged users to the main page.
 * @type {string[]}
 */

export const authRoutes = ["/auth/register", "/auth/error"];

/**
 * Prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/";
