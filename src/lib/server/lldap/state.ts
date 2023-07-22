import log from '$lib/log';
import type { GraphQLClient } from 'graphql-request';

// Keeps track of auth tokens for LLDAP
export class AuthState {
	// Tokens are undefined at the beginning
	token: string | undefined;
	#gql_client: GraphQLClient;
	#refresh_token: string | undefined;
	#lldap_auth_url: string;

	constructor(url: string, username: string, password: string, gql_client: GraphQLClient) {
		log.info('Creating new LLDAP auth state');

		this.#lldap_auth_url = url + '/auth/simple/login';
		this.#gql_client = gql_client;

		this.get_new_tokens(username, password);
	}

	async get_new_tokens(username: string, password: string) {
		log.info('Creating new LLDAP auth tokens');

		try {
			let res = await fetch(this.#lldap_auth_url, {
				method: 'POST',
				mode: 'no-cors',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			});

			let parsed = await res.json();

			if (parsed.token && parsed.refreshToken) {
				log.info('Got new tokens, saving');
				this.set_tokens(parsed.token, parsed.refreshToken);
			} else {
				log.error('Got a malformed response from LLDAP');
			}
		} catch (error) {
			log.error('Failed to get new LLDAP token:', error);
		}
	}

	private set_tokens(token: string, refresh_token: string) {
		// Save new tokens
		this.token = token;
		this.#refresh_token = refresh_token;

		// Update new token to GQL client
		this.#gql_client.setHeader('Authorization', `Bearer ${this.token}`);
	}

    // TODO renew

    // TODO timer for renew
}
