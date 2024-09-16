import { GraphQLClient } from 'graphql-request';

const cmsUrl = `${process.env.API_BASE_URL}/api/graphql`;

export const cmsClient = new GraphQLClient(cmsUrl, {});
