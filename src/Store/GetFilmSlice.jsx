import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    films: []
}
const GetFilmSlice = createSlice({
    name: "film",
    initialState,
    reducers: {
        getNowPlayingFilm: (state, action) => {
            return {
                films: [...action.payload]
            }
        },
        getPopularFilm: (state, action) => {
            return {
                films: [...action.payload]
            }
        },
        getTopRated: (state, action) => {
            return {
                films: [...action.payload]
            }
        },
        getUpComing: (state, action) => {
            return {
                films: [...action.payload]
            }
        }
    }
})

export const { getNowPlayingFilm, getPopularFilm, getTopRated, getUpComing } = GetFilmSlice.actions;
export default GetFilmSlice.reducer;