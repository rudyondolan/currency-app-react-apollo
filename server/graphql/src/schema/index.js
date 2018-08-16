import { makeExecutableSchema } from 'graphql-tools';

// schemas
import Exchange from './exchange';

// resolvers
import resolvers from '../resolvers';

const RootQuery = `
  type RootQuery {
    exchange(base: String!, amount: Float): Exchange
  }
`;

const RootMutation = ``;

const SchemaDefinition = `
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, RootQuery, RootMutation, Exchange],
  resolvers,
});

module.exports = schema;
