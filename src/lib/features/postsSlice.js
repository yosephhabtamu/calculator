// src/store/slices/postsSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Create the slice
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [], // Holds the posts data
    isLoading: false, // Tracks the loading state
    isError: false, // Tracks if there was an error
  },
  reducers: {
    fetchPostsStart(state) {
      state.isLoading = true;
      state.isError = false;
    },
    fetchPostsSuccess(state, action) {
      state.isLoading = false;
      console.log(action.payload); 
      state.posts = action.payload;
    },
    fetchPostsFailure(state) {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

// Export the actions
export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } =
  postsSlice.actions;

export default postsSlice.reducer;

