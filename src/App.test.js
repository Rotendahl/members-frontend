import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL,
  credentials: "include"
});

const authLink = setContext((a, { headers }) => {
  return {
    headers: {
      ...headers,
      "X-CSRFToken": Cookies.get("csrftoken")
    }
  };
});

const client = new ApolloClient({
  credentials: "include",
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
