import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/counterSlice";
import postsReducer from "./features/postsSlice";

const store = configureStore({
    reducer:{
        counter:countReducer,
    posts: postsReducer
    }
});

export default store;
