interface Pokemon {
    name: string;
    weight: number;
    height: number;
    type: string;
    stats: {
        attack: number;
        defense: number;
        speed: number;
        hp: number;
    };
}
declare class Pokedex {
    private pokemons;
    constructor();
    addPokemon(pokemon: Pokemon): void;
    showAllPokemons(): void;
    searchByType(type: string): Pokemon[];
    searchByName(name: string): Pokemon[];
}
declare class Combat {
    private pokemon1;
    private pokemon2;
    constructor(pokemon1: Pokemon, pokemon2: Pokemon);
    private calculateEffectiveness;
    private calculateDamage;
    start(): void;
}
declare const charizard: Pokemon;
declare const blastoise: Pokemon;
declare const venusaur: Pokemon;
declare const pokedex: Pokedex;
declare const firePokemons: Pokemon[];
declare const combat: Combat;
