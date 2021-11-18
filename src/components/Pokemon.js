import React from 'react';
import styles from './styles.module.scss';

function Pokemon ( pokemon ){
    return (
        <div className={ styles.pokemon }>
            <div className={ styles.pokemon__name }>
                <p>{pokemon.pokemon.name}</p>
            </div>
            <div className={ styles.pokemon__meta }>
                <span>{ pokemon.pokemon.maxHP }</span>
                <span>{pokemon.pokemon.maxCP}</span>
            </div>
            <div className={ styles.pokemon__image }>
                <img src={pokemon.pokemon.image} alt={pokemon.pokemon.name}/>
            </div>
            <div className={ styles.pokemon__attacks }>
                <span className={ styles.pokemon__attack}>
                    <p>Special Attacks: </p>
                    { pokemon?.pokemon?.attacks?.special?.slice( 0, 3 ).map( attack => (
                        <span key={`${attack.name}-${attack.damage}`}>
                            {attack.name}
                        </span>
                    ))}
                </span>
                <span className={ styles.pokemon__attack}>
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
