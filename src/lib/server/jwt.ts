import { JWT_SECRET, ADMIN_PASSWORD } from '$env/static/private';
import { sign, verify } from 'jsonwebtoken';
import log from '$lib/log';

/**
 * @param password Admin password
 * @param client_ip Original client ip where request came from (imporant for logs)
 *
 * Validate that password is correct and sign JWT for 7 days
 * Returns null if password is incorrect
 */
export function jwt_sign_new(password: string, client_ip: string): string | null {
	if (password === ADMIN_PASSWORD) {
		// Could have data here, but since there is no users this is pretty overkill
		return sign({}, JWT_SECRET);
	} else {
		log.warn(`Login attempt using wrong password from ${client_ip}`);
		return null;
	}
}

/**
 *
 * @param token Tested JWT
 * @returns true if valid, false if invalid
 */
export function jwt_verify(token: string): boolean {
	try {
		let _ = verify(JWT_SECRET, token);
		return true;
	} catch (error) {
		log.warn('Attempt to use invalid JWT');
		return false;
	}
}
