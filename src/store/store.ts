// store.ts

import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from "./slices/pokemonSlice"; // Ajusta la ruta según tu estructura de archivos

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
