import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name:"profile",
    initialState:{
        value: {},
        badges:[],
    },
    reducers: {
        addProfile: (state, action) => {
            state.value = action.payload;
            state.badges = action.payload.badges;
        },
    },
});

export const {addProfile} = profileSlice.actions;
export const selectProfile = (state) => state.profile.value;
export const selectBadges = (state) => state.profile.badges;
export default profileSlice.reducer;
