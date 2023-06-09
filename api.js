export const api = async () => {
  const [pokemon, setPokemon] = useState([]);

  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=252");
    const data = await res.json();
    setPokemon(() => data);
  } catch (error) {
    setPokemon(undefined);
  }
  return pokemon;
};
