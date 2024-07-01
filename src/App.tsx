// App.tsx
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getPokemons } from "./store";
import { Pokemon } from "./apis";

function App() {
  const dispatch = useAppDispatch();
  const pokemons = useAppSelector((state) => state.pokemons.pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Pokemons</h1>
      <ul>
        {pokemons.map((pokemon: Pokemon, index: number) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
