import { configureStore } from "@reduxjs/toolkit";
import profileReducer from '../features/profileSlice';
import quizReducer from '../features/quizSlice';

export default configureStore({
    reducer: {
        profile: profileReducer,
        quiz: quizReducer
    },
});