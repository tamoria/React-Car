import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        model: "Model",
        year: "Year",
        make: "Make",
        color: "Color",
    },
    reducers: {
        chooseModel: (state, action) => { state.model = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseMake: (state, action) => { state.make = action.payload},
        chooseColor: (state, action) => { state.color = action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const { chooseModel, chooseYear, chooseMake, chooseColor} = rootSlice.actions