import React from 'react';

function Pokemon ( pokemon ){
    return (
        <div className="pokemon">
            <div className="pokemon__name">
                <p>{pokemon.pokemon.name}</p>
            </div>
            <div className="pokemon__meta">
                <span>{ pokemon.pokemon.maxHP }</span>
                <span>{pokemon.pokemon.maxCP}</span>
            </div>
            <div className="pokemon__image">
                <img src={pokemon.pokemon.image} alt={pokemon.pokemon.name}/>
            </div>
            <div className="pokemon__attacks">
                <span>
                    <p>Special Attacks: </p>
                    { pokemon?.pokemon?.attacks?.special?.slice( 0, 3 ).map( attack => (
                        <span key={`${attack.name}-${attack.damage}`}>
                            {attack.name}
                        </span>
                    ))}
                </span>
                <span>
                    <p>Fast Attacks: </p>
                    { pokemon?.pokemon?.attacks?.fast?.slice( 0, 3 ).map( attack => (
                        <span key={`${attack.name}-${attack.damage}`}>
                            {attack.name}
                        </span>
                    ))}
                </span>
            </div>
        </div>
    )
}

export default Pokemon;
