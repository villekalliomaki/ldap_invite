import { writable } from 'svelte/store';
import type { LoginState } from './types/login_state';
import { getCookie } from 'typescript-cookie';

export const loginState = writable<LoginState>({
	logged_in: false,
	token: getCookie('lldap_invite_token')
});
