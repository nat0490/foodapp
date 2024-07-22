import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addRecipeToFavorite: (state, action) => {
            //console.log('add recipe', action.payload);
            state.value.push(action.payload);
        },
        removeRecipeToFavorite: (state, action) => {
            console.log('delete:', action.payload.params.name);
            state.value = state.value.filter(recip => recip.params.name !== action.payload.params.name);
        }
    },
});

export const { addRecipeToFavorite, removeRecipeToFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;