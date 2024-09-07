// src/store/slices/postsSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Create the slice
const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [], // Holds the posts data
    post: {}, // Holds the single post data
    isLoading: false, // Tracks the loading state
    loadingMessage: "", // Holds the loading message
    isError: false, // Tracks if there was an error
    errorMessage: "", // Holds the error message
  },
  reducers: {
    actionLoading(state, action) {
      return {
        ...state,
        isLoading: true,
        loadingMessage: action.payload,
      };
    },
    addPostSuccess(state, action) {
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, action.payload], // Add the new post to the posts array
      };
    },
    fetchPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },
    fetchSinglePostSuccess(state, action) {
      return {
        ...state,
        isLoading: false,
        post: action.payload,
      };
    },
    updatePostSuccess(state, action) {
      return {
        ...state,
        isLoading: false,
        posts: state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        ), // find the post to update and replace it with the new post
      };
    },
    deletePostSuccess(state, action) {
      return {
        ...state,
        isLoading: false,
        posts: state.posts.filter((post) => post.id !== action.payload.id), // Filter out the deleted post
      };
    },
    actionFailure(state, action) {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload ?? "An error occurred",
      };
    },
  },
});

// Export the actions
export const {
  actionLoading,
  addPostSuccess,
  fetchPostsSuccess,
  fetchSinglePostSuccess,
  updatePostSuccess,
  deletePostSuccess,
  actionFailure,
} = postsSlice.actions;

export default postsSlice.reducer;
