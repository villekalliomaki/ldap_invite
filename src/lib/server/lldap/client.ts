// Interactions with LLDAP are done with it's GraphQL API
import { GraphQLClient, gql } from 'graphql-request';
import { LLDAP_URL, LLDAP_USERNAME, LLDAP_PASSWORD } from '$env/static/private';
import log from '$lib/log';
import { AuthState } from './state';

const gql_client = new GraphQLClient(LLDAP_URL + '/api/graphql');

const auth_state = new AuthState(LLDAP_URL, LLDAP_USERNAME, LLDAP_PASSWORD, gql_client);

export default gql_client;
