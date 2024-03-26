import PokemonCard from "../components/PokemonCard";

function App() {
  const pokemon = pokemonList[1];

  return (
    <div>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];



export default App;