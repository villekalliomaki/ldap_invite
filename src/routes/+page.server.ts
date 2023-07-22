import log from '$lib/log';
import prisma from '$lib/server/db';
import gql_client from '$lib/server/lldap/client';
import { gql } from 'graphql-request';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	log.info('Started new front page load');

	let query = gql`
		{
			user(userId: "ville") {
				displayName
				id
				creationDate
			}
		}
	`;

	let gql_response_data = await gql_client.request(query);

	log.info(gql_response_data);
}) satisfies PageServerLoad;
