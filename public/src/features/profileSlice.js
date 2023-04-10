import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name:"profile",
    initialState:{
        value: {},
    },
    reducers: {
        addProfile: (state, action) => {
            state.value = action.payload
        },
    },
});

export const {addProfile} = profileSlice.actions;
export const selectProfile = (state) => state.profile.value;
export default profileSlice.reducer;
