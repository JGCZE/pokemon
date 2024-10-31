"use server"

import { FetchedPokemonsData } from "../utils/types";

const fetchPokemons = async (): Promise<FetchedPokemonsData> => {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }
  
  const results = await data.json()

  return results;
}

export default fetchPokemons;
