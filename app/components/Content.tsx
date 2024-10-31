import { Suspense } from "react"
import fetchPokemons from "../actions/fetchPokemons"
import { Pokemon } from "../utils/types"
import PokemonCard from "./PokemonCard"

const Content = async () => {
  const pokemons = await fetchPokemons()

  return (
    <div className="m-4">
      <h1>Pokemon</h1>
      <ul className="flex flex-wrap gap-4">
        <Suspense fallback={<div>Loading...</div>}>
          {pokemons.results.map((pokemon: Pokemon, index) => (
            <PokemonCard pokemon={pokemon} key={index} />
          ))}
        </Suspense>
      </ul>
    </div>
  )
}

export default Content
