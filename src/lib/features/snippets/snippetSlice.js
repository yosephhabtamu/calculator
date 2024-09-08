import { createSlice } from "@reduxjs/toolkit";


//snippet of codes from github as sample preview
const snippetSlice = createSlice({
  name: "snippets",
  initialState: {
    code: {},
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
    fetchSnippetSuccess(state, action) {
      return {
        ...state,
        isLoading: false,
        code:action.payload,
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
    fetchSnippetSuccess,
    actionFailure,
    } = snippetSlice.actions;
export default snippetSlice.reducer;
