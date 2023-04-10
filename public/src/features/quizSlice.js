import { createSlice } from "@reduxjs/toolkit";

export const quizSlice = createSlice({
    name:"quiz",
    initialState:{
        value: [],
    },
    reducers: {
        addQuiz: (state, action) => {
            state.value.push(action.payload);
        },
        addAllQuiz:(state, action) => {
            state.value = [];
            state.value.push(...action.payload);
        },
    },
});

export const {addQuiz, addAllQuiz} = quizSlice.actions;
export const selectQuiz = (state) => state.quiz.value;
export default quizSlice.reducer;
