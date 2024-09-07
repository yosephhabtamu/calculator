import {
  addPostSuccess,
  fetchPostsSuccess,
  fetchSinglePostSuccess,
  updatePostSuccess,
  deletePostSuccess,
  actionLoading,
  actionFailure,
} from "./postsSlice";

export const fetchPosts = () => async (dispatch) => {
  try {
    dispatch(actionLoading("Loading list of posts..."));
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    dispatch(fetchPostsSuccess(data));
  } catch (error) {
    dispatch(actionFailure("An error occurred while loading posts."));
  }
};

export const fetchSinglePost = (id) => async (dispatch) => {
  try {
    dispatch(actionLoading("Loading single post..."));
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const data = await response.json();
    dispatch(fetchSinglePostSuccess(data));
  } catch (error) {
    dispatch(actionFailure("An error occurred while loading single post."));
  }
};

export const addPost = (post) => {
  return async function (dispatch) {
    try {
      dispatch(actionLoading("Adding post..."));
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      dispatch(addPostSuccess(data));
    } catch (error) {
      dispatch(actionFailure("An error occurred while adding post."));
    }
  };
};

export const updatePost = (post) => {
  return async function (dispatch) {
    try {
      dispatch(actionLoading("Updating post..."));
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`,
        {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      dispatch(updatePostSuccess(data));
    } catch (error) {
        console.error(error);
      dispatch(actionFailure("An error occurred while updating post."));
    }
  };
};

export const deletePost = (id) => {
  return async function (dispatch) {
    try {
      dispatch(actionLoading("Deleting post..."));
     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      if(response.status === 200){
          dispatch(deletePostSuccess(id));
        }
    } catch (error) {
      dispatch(actionFailure("An error occurred while deleting post."));
    }
  };
};
