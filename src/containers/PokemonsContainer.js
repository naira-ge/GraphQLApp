import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS, gqlVariables } from '../graphql/get-pokemons';
import Pokemon from '../components/Pokemon';

export function PokemonsContainer() {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  } );
  
    return (
        <div className="pokemons">
        { pokemons && pokemons.results?.map( pokemon => <Pokemon key={pokemon.id} pokemon={ pokemon } />)}
        </div>
    )
}