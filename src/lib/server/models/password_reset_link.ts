import prisma from '$lib/server/db';
import apollo_client from '$lib/server/lldap/apollo';
import log from '$lib/log';

/**
 *
 * @param user_id LDAP username of the user
 *
 * Create a new link which the user can use to set a new password in LDAP
 */
const create_password_reset_link = async (user_id: String) => {};
