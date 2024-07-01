import { setData } from "../slices/pokemonSlice";
import { AppDispatch } from "../store";
import { pokemonInstance } from "../../apis/pokemonApi";

export const getPokemons = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const { data } = await pokemonInstance.get("/pokemon?limit=151");
      dispatch(setData(data.results));
    } catch (error) {
      console.error("Error fetching pokemons:", error);
      // Aquí podrías despachar una acción para manejar el error, si es necesario
    }
  };
};
