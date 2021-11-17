import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      maxHP
      maxCP
      fleeRate
      attacks {
        special {
          name
          damage
        }
        fast {
          name
          damage
        }
      }
    }
  }
`;