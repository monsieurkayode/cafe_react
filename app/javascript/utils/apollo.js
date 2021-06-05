import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';

const apolloClient = () => {
  const httpLink = createHttpLink({ uri: '/graphql' });

  const middlewareLink = new ApolloLink((operation, forward) => {
    const csrfTag = document.querySelector("meta[name='csrf-token']")
    operation.setContext({
      headers: {
        'X-CSRF-Token': csrfTag ? csrfTag.getAttribute("content") : ''
      }
    });
    return forward(operation)
  })

  // use with apollo-client
  const link = middlewareLink.concat(httpLink);
  
  const client = new ApolloClient({
    link: link,
    credentials: 'same-origin',
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    connectToDevTools: process.env.NODE_ENV === 'development'
  });

  return client
}

export default apolloClient;
