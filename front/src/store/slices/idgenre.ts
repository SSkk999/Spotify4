import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const initState = {
    value: ""
};

const genreIdsportReducer = createSlice({
    name: "idGenre",
    initialState: initState,
    reducers: {
        Renema(state ,action: PayloadAction<string>) {
            state.value = action.payload;
            console.log(state.value);
        },
      
    },
});

export const { Renema} = genreIdsportReducer.actions;
export default genreIdsportReducer.reducer;
