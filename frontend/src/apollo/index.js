import ApolloClient from "apollo-client";
// New Imports
// import { split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
// import { getMainDefinition } from "apollo-utilities";
import { InMemoryCache } from "apollo-cache-inmemory";

// Create the subscription websocket link
const link = new WebSocketLink({
  uri: "ws://localhost:4000/",
  options: {
    reconnect: true,
  },
});

export const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  link,
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
