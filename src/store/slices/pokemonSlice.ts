import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../apis";

export interface AppState {
  pokemons: Pokemon[];
  page: number;
  isLoading: boolean;
  error: string | null;
}

// Estado inicial
const initialState: AppState = {
  pokemons: [],
  page: 1,
  isLoading: true,
  error: null,
};

// Define el slice con tipos explícitos
const pokemonsSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.pokemons = action.payload.pokemons;
      state.page = action.payload.page;
      state.error = null;
      state.isLoading = false;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// Exporta las acciones y el reducer
export const { setData, setLoading, setError } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
