import { setData, setError, setLoading } from "../slices/pokemonSlice";
import { AppDispatch } from "../store";
import { pokemonInstance } from "../../apis/pokemonApi";

export const getPokemons = (page = 1) => {
  return async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    page = page < 1 ? 1 : page;
    try {
      const { data } = await pokemonInstance.get(
        `/pokemon?limit=10&offset=${(page - 1) * 10}`
      );
      dispatch(setData({ pokemons: data.results, page }));
    } catch (error) {
      console.error("Error fetching pokemons:", error);
      dispatch(setError("Error fetching pokemons"));
      // Aquí podrías despachar una acción para manejar el error, si es necesario
    }
  };
};
