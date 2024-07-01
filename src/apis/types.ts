// types.ts
export interface Pokemon {
  name: string;
  url: string;
}

export interface AppState {
  pokemons: Pokemon[];
}
