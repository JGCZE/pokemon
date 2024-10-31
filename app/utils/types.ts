export type FetchedPokemonsData = {
  count: number;
  next: string;
  previous?: string;
  results: Array<Pokemon>
}

export type Pokemon = {
  name: string;
  url: string;
}
