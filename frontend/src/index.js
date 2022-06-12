import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    //uri: "http://localhost:8050/graphql",
    uri: process.env.REACT_APP_API_ENDPOINT,
    dataIdFromObject: o => o.id ? `${o.__typename}-${o.id}` : `${o.__typename}-${o.cursor}`,
  }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
