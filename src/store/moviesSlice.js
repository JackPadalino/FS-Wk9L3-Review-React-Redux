const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    list: []
};

export const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setList: (state, action) => {
            state.list = action.payload;
        }
    }
});

export const { setList } = movieSlice.actions;
export default movieSlice.reducer;