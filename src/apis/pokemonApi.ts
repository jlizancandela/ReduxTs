import axios from "axios";


export type PokeList = {
    count: number
    next: string
    previous: string
    results: {
        name: string
        url: string
    }[]
}

export const pokemonInstance = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
});