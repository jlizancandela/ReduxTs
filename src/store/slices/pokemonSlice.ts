import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../../apis";

export interface AppState {
  pokemons: Pokemon[];
}
// Estado inicial
const initialState: AppState = {
  pokemons: [],
};

// Define el slice con tipos explícitos
const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
    },
  },
});

// Exporta las acciones y el reducer
export const { setData } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
