import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { execute, subscribe } from 'graphql';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import schema from './src/schema';

const PORT = 3001;
const server = express();

server.use(
  '*',
  cors({
    origin: `http://localhost:3000`,
    credentials: true,
  }),
);

server.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema,
    debug: true,
  }),
);

server.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql',
    subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`,
  }),
);

const ws = createServer(server);
server.listen(PORT, () => {
  console.log(`Apollo server is running on http://localhost:${PORT}`); //eslint-disable-line
  // Set up the WebSocket for handling GraphQL subscriptions
  new SubscriptionServer( // eslint-disable-line
    {
      execute,
      subscribe,
      schema,
    },
    {
      server: ws,
      path: '/subscriptions',
    },
  );
});

export default server;
