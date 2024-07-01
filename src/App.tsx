// App.tsx
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { getPokemons } from "./store";
import { Pokemon } from "./apis";
import { BarLoader } from "react-spinners";

function App() {
  const dispatch = useAppDispatch();

  const { pokemons, page, isLoading, error } = useAppSelector(
    (state) => state.pokemons
  );
  const [spinnerVisible, setSpinnerVisible] = useState(false);

  useEffect(() => {
    dispatch(getPokemons(page));
  }, [dispatch, page]);

  useEffect(() => {
    if (isLoading) {
      setSpinnerVisible(true);
    } else {
      const timeoutId = setTimeout(() => setSpinnerVisible(false), 600); // 500ms delay
      return () => clearTimeout(timeoutId);
    }
  }, [isLoading]);

  return (
    <div className="App">
      <h1>Pokemons</h1>
      <p>Page: {page}</p>
      <BarLoader
        color="#36d7b7"
        loading={spinnerVisible}
        cssOverride={{
          transition: "all 0,5 ease",
          marginLeft: 50,
          display: "block",
          width: "50px",
        }}
      />
      {error && <p>{error}</p>}
      <ul>
        {!spinnerVisible &&
          pokemons?.map((pokemon: Pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
      </ul>
      <button onClick={() => dispatch(getPokemons(page + 1))}>Next Page</button>
      <button onClick={() => dispatch(getPokemons(page - 1))}>
        Previous Page
      </button>
    </div>
  );
}

export default App;
