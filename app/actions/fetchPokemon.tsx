const fetchPokemon = async (name: string) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!res.ok) {
      throw new Error(`No Pokémon found with name: ${name}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    throw error;
  }
};

export default fetchPokemon;
