import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { jwt_sign_new } from '$lib/server/jwt';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const password = data.get('password');

		// Check that password is provided
		if (!password) {
			return fail(400, { password, missing: true });
		}

		const ip = event.getClientAddress();

		// Validate password and get new token
		let new_token = jwt_sign_new(password.toString(), ip);

		if (new_token) {
			event.cookies.set("lldap_invite_token", new_token, {path: "/"})
			return new_token;
		} else {
			return fail(400, { password, incorrect: true });
		}
	}
} satisfies Actions;
