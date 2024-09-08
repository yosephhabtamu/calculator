import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/counterSlice";
import postsReducer from "./features/posts/postsSlice";
import snippetReducer from "./features/snippets/snippetSlice";

const store = configureStore({
  reducer: {
    counter: countReducer,
    posts: postsReducer,
    snippets: snippetReducer,
  },
});

export default store;
