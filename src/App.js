import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { PokemonsContainer } from './containers/PokemonsContainer';

function App (){
  // Instantiate required constructor fields
  const cache = new InMemoryCache();
  const link = new HttpLink( { uri: 'https://graphql-pokemon2.vercel.app/' } );
  
  const client = new ApolloClient( {
    cache: cache,
    link: link,
    
    name: 'graphql-pokemon-client',
    queryDeduplication: false,
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network'
      }
    }
  });

  return (
    <ApolloProvider client={ client }>
      <main>
        <PokemonsContainer />
      </main>
    </ApolloProvider>
  );
}

export default App;
