import fetchPokemon from "../actions/fetchPokemon";

const Pokemon = async ({ params }: { params: { pokemon: string }}) => {
  const { pokemon } = params

  const data = await fetchPokemon(pokemon)
  console.log(data)

  return (
    <div>Pokemon</div>
  )
}

export default Pokemon;
