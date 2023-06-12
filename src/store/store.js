import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'
import { todosApi } from './slices/apis'

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,

        // RTK Query
        [todosApi.reducerPath]: todosApi.reducer,
    },
    // RTK Query
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(todosApi.middleware)
})